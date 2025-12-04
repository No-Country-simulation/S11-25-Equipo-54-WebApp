import { Router } from "express";
import {
    createNewsController,
    getAllNewsController,
    getNewsByIdController,
    updateNewsController,
    deleteNewsController
} from "../controllers/news.controller";

import { authMiddleware } from "../middleware/Auth.middleware";
import { isAdmin } from "../middleware/isAdmin";

const router = Router();

// Solo admin puede crear, actualizar o borrar
router.post("/", authMiddleware, isAdmin, createNewsController);
router.put("/:id", authMiddleware, isAdmin, updateNewsController);
router.delete("/:id", authMiddleware, isAdmin, deleteNewsController);

// Todos pueden ver
router.get("/", getAllNewsController);
router.get("/:id", getNewsByIdController);

export default router;
