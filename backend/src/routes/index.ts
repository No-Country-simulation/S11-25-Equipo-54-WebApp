import { Router } from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import { exampleController } from "../controllers/init.controller";

const router = Router();

// Ruta base
router.get("/", exampleController);

// Rutas de usuarios
router.use("/users", userRoutes);

// Rutas de productos
router.use("/products", productRoutes);

export default router;
