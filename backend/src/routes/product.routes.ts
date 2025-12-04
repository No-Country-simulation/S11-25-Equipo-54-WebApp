import { Router } from "express";
import { upload } from "../config/cloudinary";
import {
    createProductController,
    getProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController
} from "../controllers/product.controller";
import { authMiddleware } from "../middleware/Auth.middleware";
import { isAdmin } from "../middleware/isAdmin";

const router = Router();
//rutas protegidas solo para admin
router.post("/", authMiddleware, isAdmin, upload.single("img"), createProductController);
router.put("/:id", authMiddleware, isAdmin, upload.single("img"), updateProductController);
router.delete("/:id", authMiddleware, isAdmin, deleteProductController);
//clientes
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);

export default router;
