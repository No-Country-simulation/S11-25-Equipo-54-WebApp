import { Request, Response } from "express";
import {cloudinary} from "../config/cloudinary";
import { uploadToCloudinary } from "../config/cloudinary";

import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from "../services/product.service";

export const createProductController = async (req: Request, res: Response) => {
    try {
        let imageUrl = null;

        if (req.file) {
            const uploadResult: any = await uploadToCloudinary(req.file.buffer, "EcoShop/products");
            imageUrl = uploadResult.secure_url;
        }

        const newProduct = await createProduct({
            ...req.body,
            img: imageUrl,
        });

        res.status(201).json({ message: "Producto creado", newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getProductsController = async (req: Request, res: Response) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: (error as Error).message });
    }
};

export const getProductByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const product = await getProductById(Number(id));

        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const updateProductController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        let imageUrl = req.body.img || null;

        if (req.file) {
            const uploadResult: any = await uploadToCloudinary(req.file.buffer, "EcoShop/products");
            imageUrl = uploadResult.secure_url;
        }

        const updated = await updateProduct(Number(id), {
            ...req.body,
            img: imageUrl,
        });

        if (!updated) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto actualizado correctamente" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};

export const deleteProductController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await deleteProduct(Number(id));

        if (!deleted) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
};
