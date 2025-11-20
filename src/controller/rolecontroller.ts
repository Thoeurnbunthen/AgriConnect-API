import { Request, Response } from "express";
import { createRoleService } from "../services/roleservice";

/**
 * @swagger
 * /role/create-role:
 *   post:
 *     tags: [Role]
 *     summary: Create a new role
 *     description: Create a new role by providing a role name.
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
 *         description: Invalid request body or duplicate role
 *       500:
 *         description: Internal server error
 */
export const createRoleController = async (req: Request, res: Response) => {
  const result = await createRoleService(req, res);
  return result;
};
