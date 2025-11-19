import { Router } from "express";
import authRoute from "./authRoute";
import roleRoute from "./roleRoute";

const router = Router();

router.use("/auth", authRoute);
router.use("/role", roleRoute);

export default router;
