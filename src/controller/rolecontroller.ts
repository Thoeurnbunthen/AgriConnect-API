import { Request, Response } from "express";
import { createRoleService } from "../services/roleservice";

/**
 * @swagger
 * /role/create-role:
 *   post:
 *     tags: [Role]
 *     summary: Create role
 *     description: Create a new role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: admin
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Invalid input
 */

export const createRoleController = async (req: Request, res: Response) => {
  const result = await createRoleService(req, res);
  return result;
};
