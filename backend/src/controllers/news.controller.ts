import { Request, Response } from "express";
import {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews
} from "../services/news.service";

export const createNewsController = async (req: Request, res: Response) => {
    try {
        const user_id = (req as any).user?.id; // viene del token decodificado

        if (!user_id) {
            return res.status(401).json({ message: "Usuario no autenticado" });
        }

        const { title, content, image_url, status } = req.body;

        const news = await createNews({
            user_id,
            title,
            content,
            image_url: image_url || null,
            status: status || "active"
        });

        return res.status(201).json(news);
    } catch (err) {
        console.error("🔥 ERROR createNews:", err);
        return res.status(500).json({
            message: (err as Error).message || "Error al crear noticia"
        });
    }
};


export const getAllNewsController = async (req: Request, res: Response) => {
    try {
        const news = await getAllNews();
        return res.json(news);
    } catch (err) {
        console.error("🔥 ERROR getAllNews:", err);
        return res.status(500).json({
            message: (err as Error).message || "Error al obtener noticias"
        });
    }
};

export const getNewsByIdController = async (req: Request, res: Response) => {
    try {
        const news = await getNewsById(Number(req.params.id));
        return res.json(news);
    } catch (err) {
        console.error("🔥 ERROR getNewsById:", err);
        return res.status(500).json({
            message: (err as Error).message || "Error al obtener noticia"
        });
    }
};

export const updateNewsController = async (req: Request, res: Response) => {
    try {
        await updateNews(Number(req.params.id), req.body);
        return res.json({ message: "Noticia actualizada" });
    } catch (err) {
        console.error("🔥 ERROR updateNews:", err);
        return res.status(500).json({
            message: (err as Error).message || "Error al actualizar noticia"
        });
    }
};

export const deleteNewsController = async (req: Request, res: Response) => {
    try {
        await deleteNews(Number(req.params.id));
        return res.json({ message: "Noticia eliminada" });
    } catch (err) {
        console.error("🔥 ERROR deleteNews:", err);
        return res.status(500).json({
            message: (err as Error).message || "Error al eliminar noticia"
        });
    }
};
