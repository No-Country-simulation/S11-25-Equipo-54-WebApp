import { db } from "../config/db";
import { OkPacket } from "mysql2";

export const createOrder = async (user_id: number, cartItems: any[]) => {
    let total = 0;

    cartItems.forEach(item => {
        total += item.precio * item.quantity;
    });

    // INSERT en orders
    const [orderRes] = await db.execute<OkPacket>(
        "INSERT INTO orders (user_id, total) VALUES (?, ?)",
        [user_id, total]
    );

    const order_id = orderRes.insertId;

    // INSERT en order_items
    for (const item of cartItems) {
        await db.execute(
            `INSERT INTO order_items (order_id, product_id, quantity, price)
            VALUES (?, ?, ?, ?)`,
            [order_id, item.product_id, item.quantity, item.precio]
        );
    }

    return { order_id, total };
};
