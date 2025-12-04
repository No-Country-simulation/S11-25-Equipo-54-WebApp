import { db } from "../config/db";
import { RowDataPacket, OkPacket } from "mysql2";
import { News } from "../models/news.model";

// ─────────────────────────────────────────────
// Crear noticia
// ─────────────────────────────────────────────
export const createNews = async (news: News) => {
    const { user_id, title, content, image_url, status } = news;

    const [result] = await db.execute<OkPacket>(
        `INSERT INTO news (user_id, title, content, image_url, status)
         VALUES (?, ?, ?, ?, ?)`,
        [user_id, title, content, image_url, status]
    );

    return { id: result.insertId, ...news };
};

// ─────────────────────────────────────────────
// Buscar todas
// ─────────────────────────────────────────────
export const getAllNews = async () => {
    const [rows] = await db.execute<RowDataPacket[]>(
        "SELECT * FROM news ORDER BY created_at DESC"
    );

    return rows as News[];
};

// ─────────────────────────────────────────────
// Buscar por ID
// ─────────────────────────────────────────────
export const getNewsById = async (id: number) => {
    const [rows] = await db.execute<RowDataPacket[]>(
        "SELECT * FROM news WHERE id = ?",
        [id]
    );

    return rows[0] as News;
};

// ─────────────────────────────────────────────
// Actualizar noticia
// ─────────────────────────────────────────────
export const updateNews = async (id: number, news: Partial<News>) => {
    const { title, content, image_url, status } = news;

    await db.execute(
        `UPDATE news
        SET title = ?, content = ?, image_url = ?, status = ?
        WHERE id = ?`,
        [title, content, image_url, status, id]
    );
};

// ─────────────────────────────────────────────
// Eliminar noticia
// ─────────────────────────────────────────────
export const deleteNews = async (id: number) => {
    await db.execute("DELETE FROM news WHERE id = ?", [id]);
};
