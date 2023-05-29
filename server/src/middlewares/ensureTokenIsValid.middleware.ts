import "dotenv/config";
import { Request, Response, NextFunction } from "express";
import { AppErrors } from "../errors";
import jwt from "jsonwebtoken";

const ensureTokenIsValid = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppErrors("Missing bearer token!", 401);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if (error) {
      throw new AppErrors(error.message, 401);
    }

    req.user = {
      id: decoded.sub
    };
  });

  return next();
};

export default ensureTokenIsValid;
