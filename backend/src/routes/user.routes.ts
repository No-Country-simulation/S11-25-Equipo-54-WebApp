import { Router } from "express";
import { upload } from "../config/cloudinary";
import { registerUser, listUsers, login } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/register", upload.single("avatar"), registerUser);
userRouter.post("/login", login)
userRouter.get("/", listUsers);

export default userRouter;

