// src/middleware/isAdmin.ts
import { Request, Response, NextFunction } from "express";

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;
    if (!user || (user as any).rol !== "admin") {
        return res.status(403).json({ message: "Acceso denegado. Se requiere rol admin." });
    }
    next();
};
