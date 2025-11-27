import { Request, Response } from "express";
import { UserModel } from "@/model/usersmodel";
import bcrypt from "bcryptjs";
import { RoleModel } from "@/model/rolemodel";
import { UserRoleModel } from "@/model/userRolemodel";

export const createUserService = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, phone, email, password } = req.body;

    if (!firstName || !lastName || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      firstName,
      lastName,
      phone,
      email,
      password: hashedPassword,
    });

    const defaultRole = await RoleModel.findOne({ name: "farmer" });
    if (!defaultRole) {
      return res.status(400).json({ message: "Default role not found" });
    }

    try {
      await UserRoleModel.create({
        userId: newUser._id,
        roleId: defaultRole._id,
      });
    } catch (err) {
      console.error("UserRole creation failed:", err);
      // optional: continue without failing
    }

    const { password: pw, __v, ...safeUser } = newUser.toObject();
    return res
      .status(201)
      .json({ message: "User created successfully", data: safeUser });
  } catch (error: any) {
    console.error("Create user error:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllUsersService = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find().select("-password"); // Exclude password field
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateUserService = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const updateData = req.body;

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    }).select("-password"); // Exclude password field

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};
