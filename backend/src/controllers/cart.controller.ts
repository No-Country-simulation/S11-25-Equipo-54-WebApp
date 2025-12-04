import { Request, Response } from "express";
import {
    getOrCreateCart,
    addItemToCart,
    getCartItems,
    clearCart
} from "../services/cart.service";

import { createOrder } from "../services/order.service";

export const addToCart = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity } = req.body;

        const cart = await getOrCreateCart(user_id);

        await addItemToCart(cart.id, product_id, quantity);

        res.json({ message: "Producto agregado al carrito" });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const listCart = async (req: Request, res: Response) => {
    try {
        const user_id = Number(req.params.user_id);
        const cart = await getOrCreateCart(user_id);

        const items = await getCartItems(cart.id);

        res.json(items);
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const checkout = async (req: Request, res: Response) => {

    if ((req.user as any)?.rol !== "cliente") {
        return res.status(403).json({ message: "Solo clientes pueden realizar checkout" });
    }

    const { user_id } = req.body;
    if ((req.user as any).id !== user_id && (req.user as any).rol !== "admin") {
        // opcional: solo dejar que el mismo usuario o admin (para admin override) realice acción
        return res.status(403).json({ message: "No autorizado para procesar este carrito" });
    }

    try {
        const { user_id } = req.body;

        const cart = await getOrCreateCart(user_id);
        const items = await getCartItems(cart.id);

        if (items.length === 0) {
            return res.status(400).json({ message: "Carrito vacío" });
        }

        const order = await createOrder(user_id, items);

        await clearCart(cart.id);

        res.json({ message: "Checkout exitoso", order });
    } catch (error) {
        res.status(500).json({ error });
    }
};
