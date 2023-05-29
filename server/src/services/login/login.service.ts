import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppErrors } from "../../errors";
import { tLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";

const loginService = async (loginData: tLogin): Promise<string> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await usersRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppErrors("Invalid credentials", 401);
  }

  if (user.deletedAt !== null) {
    throw new AppErrors("Invalid credentials", 401);
  }

  const passwordValidate: boolean = await compare(
    loginData.password,
    user.password
  );

  if (!passwordValidate) {
    throw new AppErrors("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      uuid: user.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: String(user.id),
    }
  );

  return token;
};

export default loginService;
