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
        const news = await createNews(req.body);
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getAllNewsController = async (req: Request, res: Response) => {
    try {
        const news = await getAllNews();
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const getNewsByIdController = async (req: Request, res: Response) => {
    try {
        const news = await getNewsById(Number(req.params.id));
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateNewsController = async (req: Request, res: Response) => {
    try {
        await updateNews(Number(req.params.id), req.body);
        res.json({ message: "Noticia actualizada" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const deleteNewsController = async (req: Request, res: Response) => {
    try {
        await deleteNews(Number(req.params.id));
        res.json({ message: "Noticia eliminada" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};
