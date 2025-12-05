import { db } from "../config/db";
import { hashPassword } from "../utils/bcrypt";

/**
 * Crea un usuario admin por defecto si no existe.
 * Este seed se ejecuta al iniciar el servidor.
 */
export const createDefaultAdmin = async () => {
    try {
        const adminEmail = "admin@ecoshop.com";

        // Buscar si ya existe el admin
        const [rows]: any = await db.query(
            "SELECT id FROM users WHERE email = ? LIMIT 1",
            [adminEmail]
        );

        if (rows.length > 0) {
            console.log("✔️ Admin ya existe, no se crea uno nuevo.");
            return;
        }

        // Crear password segura
        const hashed = await hashPassword("Admin123!");

        // Crear usuario admin
        await db.query(
            `INSERT INTO users (rol, name, last_name, birth_date, email, password, img)
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                "admin",
                "Super",
                "Admin",
                "1990-01-01",
                adminEmail,
                hashed,
                null
            ]
        );

        console.log("✨ Admin creado: admin@ecoshop.com / Admin123!");
    } catch (error) {
        console.error("❌ Error creando admin por defecto:", error);
    }
};
