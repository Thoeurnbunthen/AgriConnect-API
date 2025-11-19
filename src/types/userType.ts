import mongoose, { Document, mongo } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
  password: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface JwtPayloadInput {
  id: string;
  role: string;
  email: string;
  userName: string;
  roles: string[];
} // we have to use export interface because it is the input type
