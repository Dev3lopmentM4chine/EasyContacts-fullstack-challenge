"use client";

import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().max(50),
  email: z.string().email().max(50),
  password: z
    .string()
    .max(50)
    // .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  // confirmPassword: z.string(),
  phoneNumber: z.string(),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "As senhas não coincidem",
//   path: ["confirmPassword"],
// });

export default function FormSignUp() {
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
    console.log(formData)
    await api.post("/users", formData);

    reset();

    router.push("/signin");
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex h-full w-full flex-col items-center md:max-h-[19.3125rem]"
    >
      <div className="flex w-full flex-col items-stretch md:flex-row md:flex-wrap md:justify-between">
        <div className="flex h-[5.25rem] w-full flex-col items-center md:max-w-[25rem]">
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeHolder="Full Name"
            register={register}
          />
          {errors?.fullName && (
            <p className="text-red-700">{`${errors.fullName.message}`}</p>
          )}
        </div>

        <div className="flex h-[5.25rem] w-full flex-col items-center md:max-w-[25rem]">
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

        <div className="flex h-[5.25rem] w-full flex-col items-center md:max-w-[25rem]">
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

        <div className="flex h-[5.25rem] w-full flex-col items-center md:max-w-[25rem]">
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
            placeHolder="Phone Number"
            register={register}
          />
          {errors?.phoneNumber && (
            <p className="text-red-700">{`${errors.phoneNumber.message}`}</p>
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
