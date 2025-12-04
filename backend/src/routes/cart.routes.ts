import { Router } from "express";
import { addToCart, listCart, checkout } from "../controllers/cart.controller";
import { authMiddleware } from "../middleware/Auth.middleware";

const router = Router();

router.post("/add", authMiddleware, addToCart);
router.get("/:user_id", authMiddleware, listCart);
router.post("/checkout", authMiddleware, checkout);

export default router;
