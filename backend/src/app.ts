import express from "express";
import cors from "cors";
import { db } from "./config/db";

const app = express();

app.use(cors());
app.use(express.json());

// para probar conexion
app.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT 1 + 1 AS result");
        res.json({
            message: "🌱 EcoShop API funcionando correctamente",
            database: "✅ Conexión con MySQL establecida",
            result: rows,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "❌ Error al conectar con la base de datos",
            error: (error as Error).message,
        });
    }
});

export default app;
