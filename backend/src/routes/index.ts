import { Router } from "express";
import userRoutes from "./user.routes";
import productRoutes from "./product.routes";
import { exampleController } from "../controllers/init.controller";
import cartRoutes from "./cart.routes";
import newsRoutes from "./news.routes";

const router = Router();

// Ruta base
router.get("/", exampleController);

// Rutas de usuarios
router.use("/users", userRoutes);

// Rutas de productos
router.use("/products", productRoutes);

router.use("/cart", cartRoutes);

router.unsubscribe("/news", newsRoutes);

export default router;
