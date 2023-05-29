import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/users.controllers";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import ensureTokenIsValid from "../middlewares/ensureTokenIsValid.middleware";
import ensureEmailAlreadyExists from "../middlewares/users/ensureEmailAlreadyExists.middleware";
import ensureUserExists from "../middlewares/users/ensureUserExists.middleware";
import routePermissions from "../middlewares/users/routePermission.middleware";
import { updateUserSchema, userSchema } from "../schemas/users.schemas";

const usersRoute: Router = Router();

//Rotas CRUD
usersRoute.post(
  "",
  ensureDataIsValid(userSchema),
  ensureEmailAlreadyExists,
  createUserController
);

usersRoute.get("", ensureTokenIsValid, listAllUsersController);

usersRoute.patch(
  "/:id",
  ensureDataIsValid(updateUserSchema),
  ensureTokenIsValid,
  routePermissions,
  ensureUserExists,
  ensureEmailAlreadyExists,
  updateUserController
);

usersRoute.delete(
  "/:id",
  ensureTokenIsValid,
  routePermissions,
  ensureUserExists,
  deleteUserController
);

export default usersRoute;
