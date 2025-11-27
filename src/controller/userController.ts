import {
  createUserService,
  getAllUsersService,
  updateUserService,
} from "@/services/userService";
import { Request, Response } from "express";

/**
 * @swagger
 * /user/create-user:
 *   post:
 *     tags: [User]
 *     summary: Create a new user
 *     description: Admin can create a new user by providing user details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - password
 *               - phone
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: Sok
 *               lastName:
 *                 type: string
 *                 example: Dara
 *               email:
 *                 type: string
 *                 format: email
 *                 example: dara@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: StrongP@ss123
 *               phone:
 *                 type: string
 *                 example: "012345678"
 *               roleId:
 *                 type: string
 *                 example: "673c41d50e8b1fcd9e2a1234"
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 673c41d50e8b1fcd9e2a5555
 *                     firstName:
 *                       type: string
 *                       example: Sok
 *                     lastName:
 *                       type: string
 *                       example: Dara
 *                     email:
 *                       type: string
 *                       example: dara@example.com
 *                     phone:
 *                       type: string
 *                       example: "012345678"
 *                     roleId:
 *                       type: string
 *                       example: "673c41d50e8b1fcd9e2a1234"
 *       400:
 *         description: Bad Request – Missing or invalid fields
 *       500:
 *         description: Internal Server Error
 */

export const createUserController = async (req: Request, res: Response) => {
  //   console.log("===work=====");
  const result = await createUserService(req, res);
  return result;
};

/**
 * @swagger
/user/get-all:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     description: Retrieve a list of all users in the system.
 *     responses:
 *       200:
 *         description: Successfully retrieved all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "674366b2b47823c5e2f49d11"
 *                   firstName:
 *                     type: string
 *                     example: "John"
 *                   lastName:
 *                     type: string
 *                     example: "Doe"
 *                   email:
 *                     type: string
 *                     example: "john@gmail.com"
 *                   phone:
 *                     type: string
 *                     example: "098765432"
 *                   role:
 *                     type: string
 *                     example: "admin"
 *       500:
 *         description: Internal server error
 */

export const getAllUserController = async (req: Request, res: Response) => {
  const result = await getAllUsersService(req, res);
  return result;
};

/**
 * @swagger
 * /user/update/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Update a user
 *     description: Update user information by user ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *           example: "674366b2b47823c5e2f49d11"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: "Jane"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               email:
 *                 type: string
 *                 example: "jane@gmail.com"
 *               phone:
 *                 type: string
 *                 example: "0123456789"
 *               role:
 *                 type: string
 *                 example: "user"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User updated successfully"
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "674366b2b47823c5e2f49d11"
 *                     firstName:
 *                       type: string
 *                       example: "Jane"
 *                     lastName:
 *                       type: string
 *                       example: "Doe"
 *                     email:
 *                       type: string
 *                       example: "jane@gmail.com"
 *                     phone:
 *                       type: string
 *                       example: "0123456789"
 *                     role:
 *                       type: string
 *                       example: "user"
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

export const updateUserController = async (req: Request, res: Response) => {
  const result = await updateUserService(req, res);
  return result;
};
