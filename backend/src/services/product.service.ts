import { db } from "../config/db";
import { Product } from "../models/product.model";

// Hardcode de huella CO2
const DEFAULT_CO2 = 19.739;

export const createProduct = async (productData: Product) => {
    const huella = productData.huella_co2 || DEFAULT_CO2;

    const [result] = await db.query(
        `INSERT INTO product (marca, titulo, descripcion, precio, img, huella_co2)
        VALUES (?, ?, ?, ?, ?, ?)`,
        [
            productData.marca,
            productData.titulo,
            productData.descripcion,
            productData.precio,
            productData.img || null,
            huella
        ]
    );

    return result;
};

export const getProducts = async () => {
    const [rows] = await db.query("SELECT * FROM product");
    return rows;
};

export const getProductById = async (id: number) => {
    const [rows]: any = await db.query("SELECT * FROM product WHERE id = ?", [id]);
    return rows.length > 0 ? rows[0] : null;
};

export const updateProduct = async (id: number, productData: Product) => {
    const huella = productData.huella_co2 || DEFAULT_CO2;

    const [result]: any = await db.query(
        `UPDATE product
        SET marca = ?, titulo = ?, descripcion = ?, precio = ?, img = ?, huella_co2 = ?
        WHERE id = ?`,
        [
            productData.marca,
            productData.titulo,
            productData.descripcion,
            productData.precio,
            productData.img || null,
            huella,
            id
        ]
    );

    return result.affectedRows > 0;
};

export const deleteProduct = async (id: number) => {
    const [result]: any = await db.query(
        "DELETE FROM product WHERE id = ?",
        [id]
    );
    return result.affectedRows > 0;
};
