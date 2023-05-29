import { NextFunction, Request, Response } from "express";
import { AppErrors } from "../../errors";

const routePermissions = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.user.id !== req.params.id) {
    throw new AppErrors("Insufficient permission", 403);
  }

  return next();
};

export default routePermissions;
