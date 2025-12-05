import { Request, Response } from "express";
import { createUser, getUserByEmail, getUsers } from "../services/user.service";
import { uploadToCloudinary } from "../config/cloudinary";
import { Users } from "../models/user.model";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY || "default_secret";
const JWT_EXPIRES = process.env.JWT_EXPIRES_IN || "1h";

if (!JWT_SECRET) {
    console.warn("⚠️  JWT_SECRET_KEY no definido en .env");
}


interface UserTokenPayload {
    id: number | null;
    email: string;
    rol: string;
}

/* ---------------------------------------------------------
GENERAR TOKEN SIN ERRORES
--------------------------------------------------------- */
export const generatedToken = (user: UserTokenPayload): string => {
    const options: jwt.SignOptions = {
        expiresIn: JWT_EXPIRES,
    };

    return jwt.sign(
        { ...user },
        JWT_SECRET,
        options
    );
};



/* ---------------------------------------------------------
LOGIN
--------------------------------------------------------- */
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(email);

        if (!user)
            return res.status(404).json({ message: "Usuario no encontrado" });

        const checkPassword = await comparePassword(password, user.password);
        if (!checkPassword)
            return res.status(401).json({ message: "Contraseña incorrecta" });

        const payload: UserTokenPayload = {
            id: (user.id ?? null) as number | null,
            email: user.email,
            rol: user.rol,
        };

        const token = generatedToken(payload);

        res.status(200).json({ message: "Login exitoso", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};

/* ---------------------------------------------------------
REGISTER
--------------------------------------------------------- */
export const registerUser = async (req: Request, res: Response) => {
    try {
        const userData: Users = req.body;

        if (
            !userData.email ||
            !userData.name ||
            !userData.last_name ||
            !userData.birth_date ||
            !userData.password
        ) {
            return res
                .status(400)
                .json({ message: "Debe enviar los campos obligatorios" });
        }

        // subir imagen opcional
        if (req.file) {
            const result: any = await uploadToCloudinary(req.file.buffer, "users");
            userData.img = result.secure_url;
        } else {
            userData.img = null;
        }

        // rol cliente por defecto
        userData.rol = "cliente";

        // hashear solo una vez
        userData.password = await hashPassword(userData.password);

        // insertar en DB
        const dbResult: any = await createUser(userData);

        const newUserId = dbResult?.insertId ?? null;

        const payload: UserTokenPayload = {
            id: newUserId as number | null,
            email: userData.email,
            rol: userData.rol,
        };

        const token = generatedToken(payload);

        res.status(201).json({
            message: "Usuario creado",
            user: { id: newUserId, ...userData, password: undefined },
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};

/* ---------------------------------------------------------
Crear ADMIN (solo admin puede hacerlo)
--------------------------------------------------------- */
export const createAdminUser = async (req: Request, res: Response) => {
    try {
        const adminData: Users = req.body;

        if (!adminData.email || !adminData.name || !adminData.last_name || !adminData.birth_date || !adminData.password) {
            return res.status(400).json({ message: "Debe enviar los campos obligatorios" });
        }

        // Imagen opcional
        if (req.file) {
            const result: any = await uploadToCloudinary(req.file.buffer, "users");
            adminData.img = result.secure_url;
        } else {
            adminData.img = null;
        }

        // 🔥 Forzar rol admin
        adminData.rol = "admin";

        // Hash de contraseña
        adminData.password = await hashPassword(adminData.password);

        const dbResult: any = await createUser(adminData);
        const newAdminId = dbResult.insertId;

        const payload: UserTokenPayload = {
            id: newAdminId as number | null,
            email: adminData.email,
            rol: "admin",
        };

        const token = generatedToken(payload);

        res.status(201).json({
            message: "Administrador creado correctamente",
            admin: { id: newAdminId, ...adminData, password: undefined },
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};



/* ---------------------------------------------------------
LIST USERS
--------------------------------------------------------- */
export const listUsers = async (_req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
