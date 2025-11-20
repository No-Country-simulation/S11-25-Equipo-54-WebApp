import { Router } from "express";
import { upload } from "../config/cloudinary";
import {
    createProductController,
    getProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController
} from "../controllers/product.controller";

const router = Router();

router.post("/", upload.single("img"), createProductController);
router.put("/:id", upload.single("img"), updateProductController);
router.get("/", getProductsController);
router.get("/:id", getProductByIdController);
router.delete("/:id", deleteProductController);

export default router;
