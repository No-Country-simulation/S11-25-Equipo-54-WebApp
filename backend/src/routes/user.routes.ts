import { Router } from "express";
import { upload } from "../config/cloudinary";
import { registerUser, listUsers, login, createAdminUser  } from "../controllers/user.controller";
import { authMiddleware } from "../middleware/Auth.middleware";
import { isAdmin } from "../middleware/isAdmin";

const userRouter = Router();

userRouter.post("/register", upload.single("avatar"), registerUser);
userRouter.post("/login", login)
userRouter.get("/", listUsers);


userRouter.post(
    "/create-admin",
    authMiddleware,
    isAdmin,
    upload.single("avatar"),
    createAdminUser
);

export default userRouter;

