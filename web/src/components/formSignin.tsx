"use client";

import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email().max(50),
  password: z
    .string()
    .max(50)
    // .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
});

export default function FormSignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  async function submit(formData: any): Promise<void> {
    const response = await api.post("/login", formData);
    const token = response.data.token;

    Cookies.set("token", token);

    reset()
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex h-[19.3125rem] w-full flex-col items-center justify-between"
    >
      <div className="flex w-full flex-col items-center gap-9">
        <div className="flex h-[5.25rem] w-full flex-col items-center">
          <Input
            id="email"
            name="email"
            type="email"
            placeHolder="Email"
            register={register}
          />
          {errors?.email && (
            <p className="text-red-700">{`${errors.email.message}`}</p>
          )}
        </div>

        <div className="flex h-[5.25rem] w-full flex-col items-center">
          <Input
            id="password"
            name="password"
            type="Password"
            placeHolder="Password"
            register={register}
          />
          {errors?.password && (
            <p className="text-red-700">{`${errors.password.message}`}</p>
          )}
        </div>
      </div>

      <p className="flex flex-row gap-1 text-white md:hidden">
        Dont have an account?
        <Link href={"/"} className="text-brand">
          Sign up!
        </Link>
      </p>

      <Button text="SignIn" type="submit" />
    </form>
  );
}
