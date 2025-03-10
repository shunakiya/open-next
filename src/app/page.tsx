"use client";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import { useActionState } from "react";
import { login } from "../utils/auth";
import Link from "next/link";
import { notoserif } from "@/fonts";

interface LoginFormErrors {
  username?: string[];
  password?: string[];
}

interface LoginState {
  error?: LoginFormErrors;
  username?: string;
}

export default function Login() {
  const [state, action, isPending] = useActionState<
    LoginState | undefined,
    FormData
  >(login, undefined);
  return (
    <div className="flex bg-blue-950 h-screen overflow-y-hidden">
      <div className="relative h-full w-1/2">
        <Image
          src="/assets/images/bg-3.jpg"
          alt="Background 1"
          quality={100}
          width={1000}
          height={1000}
          priority
        />

        <div className="font-notoserif absolute top-4 right-4 z-10">
          <a
            href="https://github.com/shunakiya/SALSNB"
            target="_blank"
            className="flex gap-1 rounded-xl bg-white/20 px-3 py-1 text-xs font-light w-fit items-center"
          >
            <p className="font-light mt-0.5">GitHub Page</p>
            <IoOpenOutline size={15} />
          </a>
        </div>
      </div>

      <div className="relative z-10 flex items-center mx-auto">
        <div className="flex flex-col gap-9 w-[409px] px-5 py-10">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="font-notoserif text-5xl font-medium tracking-tight text-center">
                Welcome Back
              </h1>

              <p className="text-center text-slate-400 text-sm">
                Enter your username and password to access your account
              </p>
            </div>
          </div>

          <form
            action={action}
            className="relative flex flex-col gap-5 text-gray-50/60 "
          >
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#e0e6ff]">Username</p>

              <input
                type="text"
                placeholder="Enter your username"
                autoComplete="true"
                name="username"
                className="border-none w-full bg-[#353C5A] py-2.5 px-4 rounded-lg  font-light text-sm transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              {state?.error?.username && (
                <p className="text-left text-xs text-red-700 mt-1.5 ml-1">
                  {state.error.username}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#e0e6ff]">Password</p>

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="w-full border-none bg-[#353C5A] py-3 px-4 rounded-lg font-light text-sm text-gray-50/60 transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              {state?.error?.password && (
                <p className="text-left text-xs text-red-700 mt-1.5 ml-1">
                  {state.error.password}
                </p>
              )}
            </div>

            <div className="w-full items-center bg-[#5D7BE8] text-center py-2.5 rounded-lg mt-4 transition-all duration-200 ease-in-out hover:bg-[#7591FF] ">
              {/*  add buttons properties for when it gets disabled */}
              <button
                disabled={isPending}
                type="submit"
                className="text-sm text-[#e0e6ff]"
              >
                {isPending ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="absolute bottom-7 left-7 right-7">
            <p className="text-sm text-slate-400 font-light text-center ">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="underline cursor-pointer text-[#7591FF]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
