import { db } from "../config/db";
import { Users } from "../models/user.model";
import { hashPassword } from "../utils/bcrypt";

export const createUser = async (userData: Users) => {
    const hashed = await hashPassword(userData.password);

    const [result] = await db.query(
        `INSERT INTO users (rol, name, last_name, birth_date, email, password, img)
        VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
            userData.rol,
            userData.name,
            userData.last_name,
            userData.birth_date,
            userData.email,
            hashed,
            userData.img || null
        ]
    );
    return result;
};

export const getUsers = async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
};
