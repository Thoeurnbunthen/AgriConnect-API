import {
  Registercontroller,
  Logincontroller,
} from "@/controller/authcontroller";
import Express from "express";

const router = Express.Router();

router.post("/register", Registercontroller);
router.post("/login", Logincontroller);

export default router;
