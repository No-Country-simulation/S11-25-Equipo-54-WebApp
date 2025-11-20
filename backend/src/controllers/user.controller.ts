import { Request, Response } from "express";
import { createUser, getUsers } from "../services/user.service";
import { uploadToCloudinary } from "../config/cloudinary";

export const registerUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;

        // Si viene una imagen, subirla
        if (req.file) {
            const result: any = await uploadToCloudinary(req.file.buffer, "users");
            userData.img = result.secure_url; // agregar URL final al body
        }

        const newUser = await createUser(userData);

        res.status(201).json({
            message: "Usuario creado",
            newUser
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
