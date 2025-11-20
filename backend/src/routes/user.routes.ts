import { Router } from "express";
import { upload } from "../config/cloudinary";
import { registerUser, listUsers } from "../controllers/user.controller";

const router = Router();

router.post("/register", upload.single("avatar"), registerUser);
router.get("/", listUsers);

export default router;

