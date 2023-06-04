import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";

import GithubLogo from "../../assets/githubLogo.svg";
import GoogleLogo from "../../assets/googleLogo.svg";

export default function SignIn() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10 bg-[url('../assets/bg-image.svg')] bg-cover">
      <div className="hidden flex-row items-center justify-between md:flex md:w-full md:max-w-[721px]">
        <Logo />
        <p className="flex flex-row gap-1 text-white">
          Dont have an account?
          <Link href={"/signup"} className="text-brand">
            Sign up!
          </Link>
        </p>
      </div>

      <main className="flex h-full w-full flex-col justify-between md:max-h-[34.8125rem] md:max-w-[25rem]">
        <div className="flex h-[205.05px] w-full flex-col items-center justify-between">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-white">Welcome Back</h1>
            <p className="text-lg text-white">Login into your account</p>
          </div>

          <div className="flex h-[2.8125rem] w-[16.625rem] items-center justify-between">
            <Link
              href={""}
              className="flex h-[2.6875rem] w-[7.875rem] items-center justify-center gap-2 rounded-[.3125rem] border-[1px] bg-white hover:border-brand"
            >
              <Image src={GoogleLogo} alt="" />
              <p className="hidden text-black md:inline-block">Google</p>
            </Link>

            <Link
              href={""}
              className="flex h-[2.6875rem] w-[7.875rem] items-center justify-center gap-2 rounded-[.3125rem] border-[1px] bg-white hover:border-brand"
            >
              <Image src={GithubLogo} alt="" />
              <p className="hidden text-black md:inline-block">Github</p>
            </Link>
          </div>

          <p className="text-lg text-white md:text-xs">Or continue with</p>
        </div>

        <form className="flex h-[19.3125rem] w-full flex-col items-center justify-between">
          <div className="flex w-full flex-col items-center gap-9">
            <div className="flex h-[4.375rem] w-full flex-col items-center">
              <Input type="email" placeHolder="Email" />
            </div>

            <div className="flex h-[4.375rem] w-full flex-col items-center">
              <Input type="Password" placeHolder="Password" />
            </div>
          </div>

          <p className="flex flex-row gap-1 text-white md:hidden ">
            Dont have an account?
            <Link href={"/"} className="text-brand">
              Sign up!
            </Link>
          </p>

          <Button text="SignIn" />
        </form>
      </main>
    </div>
  );
}
