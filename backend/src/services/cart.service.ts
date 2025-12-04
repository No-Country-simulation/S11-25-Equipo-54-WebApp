import { db } from "../config/db";
import { RowDataPacket, OkPacket } from "mysql2";

// ─────────────────────────────────────────────
// 1) Obtener o crear carrito
// ─────────────────────────────────────────────
export const getOrCreateCart = async (user_id: number) => {
    const [rows] = await db.execute<RowDataPacket[]>(
        "SELECT * FROM cart WHERE user_id = ?",
        [user_id]
    );

    if (rows.length > 0) return rows[0];

    const [result] = await db.execute<OkPacket>(
        "INSERT INTO cart (user_id) VALUES (?)",
        [user_id]
    );

    return { id: result.insertId, user_id };
};

// ─────────────────────────────────────────────
// 2) Agregar item al carrito
// ─────────────────────────────────────────────
export const addItemToCart = async (
    cart_id: number,
    product_id: number,
    quantity: number
) => {
    const [existing] = await db.execute<RowDataPacket[]>(
        "SELECT * FROM cart_items WHERE cart_id = ? AND product_id = ?",
        [cart_id, product_id]
    );

    if (existing.length > 0) {
        await db.execute(
            "UPDATE cart_items SET quantity = quantity + ? WHERE cart_id = ? AND product_id = ?",
            [quantity, cart_id, product_id]
        );
    } else {
        await db.execute(
            "INSERT INTO cart_items (cart_id, product_id, quantity) VALUES (?, ?, ?)",
            [cart_id, product_id, quantity]
        );
    }
};

// ─────────────────────────────────────────────
// 3) Listar items del carrito
// ─────────────────────────────────────────────
export const getCartItems = async (cart_id: number) => {
    const [rows] = await db.execute<RowDataPacket[]>(
        `SELECT ci.id, ci.quantity,
                p.id AS product_id, p.titulo, p.precio, p.img
        FROM cart_items ci
        JOIN product p ON p.id = ci.product_id
        WHERE ci.cart_id = ?`,
        [cart_id]
    );

    return rows;
};

// ─────────────────────────────────────────────
// 4) Limpiar carrito
// ─────────────────────────────────────────────
export const clearCart = async (cart_id: number) => {
    await db.execute(
        "DELETE FROM cart_items WHERE cart_id = ?",
        [cart_id]
    );
};
