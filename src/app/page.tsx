"use client";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import { useActionState } from "react";
import { login } from "../utils/auth";
import Link from "next/link";

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
    <div className="flex h-screen overflow-hidden">
      <div className="relative h-full w-1/2 p-2">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          <Image
            src="/assets/images/bg-3.png"
            alt="Wallpaper"
            quality={100}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="absolute top-8 right-8 z-10 items-center">
          <a
            href="https://github.com/shunakiya/SALSNB"
            target="_blank"
            className="flex gap-1.5 rounded-xl bg-white/30 px-3 py-1.5 w-fit items-center"
          >
            <p className="text-white/90 text-sm">GitHub Page</p>
            <IoOpenOutline size={15} className="text-white/80 mt-[1px]" />
          </a>
        </div>

        <div className="flex flex-col gap-2 absolute bottom-10 left-8 z-10 items-center w-96">
          <p className="text-left text-white font-light text-6xl/16 font-notoserifdisplay">
            Unlock
            <br />
            Your World <br />
            With a Touch
          </p>
          <p className="text-white/85 font-satoshi font-light px-3">
            Seamless security meets modern convenience. Unlock your world with a
            simple tap or touch.
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center mx-auto">
        <div className="flex flex-col gap-9 w-[409px] px-5 py-10">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="font-notoserif text-5xl font-medium tracking-tight text-center">
                Welcome Back
              </h1>

              <p className="text-center text-[#3D3D3D] text-sm">
                Enter your username and password to access your account
              </p>
            </div>
          </div>

          <form action={action} className="relative flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-sm">Username</p>

              <input
                type="text"
                placeholder="Enter your username"
                autoComplete="true"
                name="username"
                className="border-none w-full placerholder-[#6B6B6B] bg-[#F5F7FA] py-2.5 px-4 rounded-lg  font-light text-sm transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              {state?.error?.username && (
                <p className="text-left text-xs text-red-700 mt-1.5 ml-1">
                  {state.error.username}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm">Password</p>

              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="w-full border-none placerholder-[#6B6B6B] bg-[#F5F7FA] py-3 px-4 rounded-lg font-light text-sm transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              {state?.error?.password && (
                <p className="text-left text-xs text-red-700 mt-1.5 ml-1">
                  {state.error.password}
                </p>
              )}
            </div>

            <div className="w-full items-center font-bold bg-[#121212] text-center py-2.5 rounded-lg mt-4 transition-all duration-200 ease-in-out hover:bg-[#474747] ">
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
            <p className="text-sm text-center text-[#6B6B6B] ">
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
