import express from "express";
import cors from "cors";
import { db } from "./config/db";
import router from "./routes";
import userRouter from "./routes/user.routes";
import newsRoutes from "./routes/news.routes";
import path from "path";

const app = express();

// Servir documentación estática
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors());
app.use(express.json());

// 👉 Aquí se montan TODAS las rutas del proyecto
app.use("/api", router);
app.use("/api", userRouter);
app.use("/api/news", newsRoutes);

// Ruta simple para probar conexión a MySQL
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

