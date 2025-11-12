import { Router } from "express";
import { exampleController } from "../controllers/init.controller";

const router = Router();

router.get("/", exampleController);

export default router;
