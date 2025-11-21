import { Router } from "express";
import authRoute from "./authRoute";
import roleRoute from "./roleRoute";
import userRoute from "./userRoute";

const router = Router();

router.use("/auth", authRoute);
router.use("/role", roleRoute);
router.use("/", userRoute);

export default router;
