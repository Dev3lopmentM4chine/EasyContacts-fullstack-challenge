import { Request, Response } from "express";
import createUserService from "../services/users/createUser.service";
import updateUserService from "../services/users/updateUser.service";
import softDeleteUserService from "../services/users/softDeleteUser.service";
import listAllUsersService from "../services/users/listAllUsers.service";
import { tUserReturn } from "../interfaces/users.interfaces";
import userLoggedService from "../services/users/userLogged.service";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await createUserService(req.body);

  return res.status(201).json(user);
};

const listAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listAllUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await updateUserService(req.body, req.params.id);

  return res.status(201).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await softDeleteUserService(req.params.id);

  return res.status(204).json();
};

const userLoggedController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await userLoggedService(req.user.id);

  return res.status(200).json(user);
};

export {
  createUserController,
  listAllUsersController,
  updateUserController,
  deleteUserController,
  userLoggedController,
};
