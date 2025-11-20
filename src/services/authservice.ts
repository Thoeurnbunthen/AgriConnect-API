import { UserModel } from "@/model/usersmodel";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Registerservice = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;
    const existingUser = await UserModel.findOne({
      $or: [{ email }],
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    //save user to datebase
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const Loginservice = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: (user as any).role,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return res
      .status(200)
      .json({ message: "Login successful", data: user, token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const logoutService = async (req: Request, res: Response) => {
  try {
    // Since JWTs are stateless, we can't truly "log out" a user on the server side.
    // However, we can instruct the client to delete the token.
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
