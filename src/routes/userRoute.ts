import { createUserController } from "@/controller/userController";
import Express from "express";

const router = Express.Router();

router.post("/create-user", createUserController);
export default router;
