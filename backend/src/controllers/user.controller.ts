import { Request, Response } from "express";
import { createUser, getUserByEmail, getUsers } from "../services/user.service";
import { uploadToCloudinary } from "../config/cloudinary";
import { Users } from "../models/user.model";
import { comparePassword, hashPassword } from "../utils/bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { JwtPayload, Secret } from "jsonwebtoken";

dotenv.config();


const claveSecreta = process.env.JWT_SECRET_KEY;

export const generatedToken = (user: JwtPayload) => {
    if (!claveSecreta) {
        return;
    }
    return jwt.sign(user, claveSecreta, { expiresIn: "1h" });
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await getUserByEmail(email);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        const checkPassword = comparePassword(password, user.password);

        if (!checkPassword) {
            return res.status(401).json({ message: "Contraseña incorrecta" })
        }


        const payload: JwtPayload = {
            id: user.id,
            email: user.email,
            rol: user.rol
        };

        const token = generatedToken(payload);

        res.status(200).json({ message: "Login exitoso", token })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
}

export const registerUser = async (req: Request, res: Response) => {
    try {
        const userData: Users = req.body;

        if (!userData.email || !userData.name || !userData.last_name || !userData.birth_date || !userData.password) {
            return res.status(400).json({ message: "Debe enviar los campos obligatorios" })
        }

        // Si viene una imagen, subirla
        if (req.file) {
            const result: any = await uploadToCloudinary(req.file.buffer, "users");
            userData.img = result.secure_url; // agregar URL final al body
        } else {
            userData.img = null;
        }


        const newUser: Users = {
            id: Math.random() * 100,
            birth_date: userData.birth_date,
            email: userData.email,
            img: userData.img,
            rol: "cliente",
            name: userData.name,
            last_name: userData.last_name,
            password: await hashPassword(userData.password),
        };

        await createUser(newUser);

        const payload: JwtPayload = {
            id: newUser.id,
            email: newUser.email,
            rol: newUser.rol
        };

        const token = generatedToken(payload);

        res.status(201).json({
            message: "Usuario creado",
            newUser,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};



export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
