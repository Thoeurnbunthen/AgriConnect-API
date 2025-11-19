import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { JwtPayloadInput } from "../types/userType";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("authorization")?.replace(" Bearer", "");
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayloadInput;

    req.user = decoded; // now TS knows userId, role exist
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
