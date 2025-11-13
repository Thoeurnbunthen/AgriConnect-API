export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
  email: string;
  password: string;
}

export interface JwtPayloadInput {
  id: string;
  role: string;
  email: string;
  userName: string;
  roles: string[];
} // we have to use export interface because it is the input type
