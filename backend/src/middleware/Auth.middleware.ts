
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

if (!JWT_SECRET) {
    console.warn("⚠️  JWT_SECRET_KEY no está definida en .env");
}

interface TokenPayload{
    id: number;
    email: string;
    rol: string;
    iat?: number;
    exp?: number;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const header = req.header("Authorization");
        if (!header) return res.status(401).json({ message: "Token requerido" });

        const token = header.replace("Bearer ", "");
        const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
        console.log("🔥 TOKEN PAYLOAD:", decoded);


        // Guardamos en req.user la info mínima (id, email, rol)
        req.user = {
            id: decoded.id,
            email: decoded.email,
            rol: decoded.rol
        } as any;

        next();
    } catch (err) {
        console.error("🔥 AUTH ERROR:", err);
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};
