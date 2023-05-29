import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class AppErrors extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

const HandleErrors = (
  err: any,
  req: Request,
  res: Response,
  _: NextFunction
) => {
  if (err instanceof AppErrors) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }

  console.log(err);
  return res.status(500).json({ message: "Internal error server!" });
};

export { HandleErrors, AppErrors };
