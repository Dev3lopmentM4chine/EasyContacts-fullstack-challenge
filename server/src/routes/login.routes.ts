import { Router } from "express";
import ensureDataIsValid from "../middlewares/ensureDataIsValid.middleware";
import { loginSchema } from "../schemas/login.schemas";
import { loginController } from "../controllers/login.controllers";

const loginRouter: Router = Router();

loginRouter.post("", ensureDataIsValid(loginSchema), loginController);

export default loginRouter;
