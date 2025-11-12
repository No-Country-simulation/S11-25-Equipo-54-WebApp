import { Request, Response } from "express";
import { db } from "../config/db";

export const exampleController = async (req: Request, res: Response) => {
    try {
        const [rows] = await db.query("SELECT 'EcoShop API funcionando correctamente' AS message");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Error al conectar con la base de datos" });
    }
};
