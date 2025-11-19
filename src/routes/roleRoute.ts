import { createRoleController } from "@/controller/rolecontroller";
import Express from "express";

const router = Express.Router();

router.post("/create-role", createRoleController);
export default router;
