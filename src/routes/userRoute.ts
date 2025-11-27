import {
  createUserController,
  getAllUserController,
} from "@/controller/userController";
import Express from "express";

const router = Express.Router();

router.post("/create-user", createUserController);
router.get("/get-all", getAllUserController);
router.put("/update-user/:id", (req, res) => {
  res.send("Update user endpoint");
});
export default router;
