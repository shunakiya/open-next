"use client";
import Image from "next/image";
import { IoOpenOutline } from "react-icons/io5";
import {
  useActionState,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { login } from "../utils/auth";
import Link from "next/link";
import { AiOutlineLoading } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";

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

  const [activeImage, setActiveImage] = useState<number>(1);
  const [previousImage, setPreviousImage] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false);
  const [inputTypeChange, setInputTypeChange] = useState<string>("password");
  const totalImages = 4;

  const togglePassword = () => {
    setIsShowingPassword(!isShowingPassword);

    if (!isShowingPassword) {
      setInputTypeChange("text");
    } else {
      setInputTypeChange("password");
    }
  };

  // memoize image paths
  const imagePaths = useMemo(() => {
    const paths: Record<number, string> = {};
    for (let i = 1; i <= totalImages; i++) {
      paths[i] = `/assets/images/login/login-bg-${i}.png`;
    }
    return paths;
  }, []);

  // image transition logic
  const transitionToNextImage = useCallback(() => {
    setPreviousImage(activeImage);
    setTransitioning(true);
    setActiveImage((prev) => (prev === totalImages ? 1 : prev + 1));

    // reset transitioning state after animation completes
    setTimeout(() => {
      setTransitioning(false);
    }, 1000);
  }, [activeImage, totalImages]);

  useEffect(() => {
    const interval = setInterval(transitionToNextImage, 5000);
    return () => clearInterval(interval);
  }, [transitionToNextImage]);

  // memoize form error messages
  const formErrors = useMemo(
    () => ({
      username: state?.error?.username ? (
        <p className="text-left text-xs text-red-700 ml-1">
          {state.error.username}
        </p>
      ) : null,
      password: state?.error?.password ? (
        <p className="text-left text-xs text-red-700 ml-1">
          {state.error.password}
        </p>
      ) : null,
    }),
    [state?.error?.username, state?.error?.password]
  );

  // memoize button content
  const buttonContent = useMemo(() => {
    return isPending ? (
      <div className="flex items-center gap-1.5">
        <AiOutlineLoading className="animate-spin" />
        <p>Loading...</p>
      </div>
    ) : (
      "Sign In"
    );
  }, [isPending]);

  return (
    <div className="flex h-screen">
      <div className="relative h-full w-1/2 p-2">
        <div className="relative h-full w-full rounded-2xl overflow-hidden">
          {/* current image */}
          <Image
            key={`active-${activeImage}`}
            src={imagePaths[activeImage]}
            alt="Wallpaper"
            quality={100}
            fill
            style={{
              objectFit: "cover",
              zIndex: 2,
              opacity: transitioning ? 0 : 1,
              transition: "opacity 1s ease-in-out",
            }}
            priority
          />

          {/* previous image */}
          {previousImage > 0 && (
            <Image
              key={`prev-${previousImage}`}
              src={imagePaths[previousImage]}
              alt="Wallpaper"
              quality={100}
              fill
              style={{
                objectFit: "cover",
                zIndex: 1,
              }}
              priority
            />
          )}
        </div>

        {/* top right of image github link*/}
        <div className="absolute top-7 right-7 z-10 items-center">
          <a
            href="https://github.com/shunakiya/SALSNB"
            target="_blank"
            className="flex text-white/90 hover:text-[#7591FF] transition-all duation-200 ease-in-out gap-1.5 rounded-xl bg-white/30 px-3 py-1.5 w-fit items-center"
          >
            <p className="text-sm">GitHub Page</p>
            <IoOpenOutline size={15} className="mt-[1px]" />
          </a>
        </div>

        {/* bottom left image text */}
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

      <div className="relative z-10 flex items-center mx-auto ">
        <div className="flex flex-col gap-7 w-[409px] px-5 py-10">
          <div className="absolute top-6 right-7 left-7 text-center">
            <div className="flex gap-2 items-center justify-center">
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                quality={100}
                width={20}
                height={20}
              />
              <p className="font-helvetica text-lg">open</p>
            </div>
          </div>

          <div>
            {/* title */}
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
              {/* username input field */}
              <p className="text-sm">Username</p>
              <input
                type="text"
                placeholder="Enter your username"
                autoComplete="username"
                name="username"
                className="border-none w-full placerholder-[#6B6B6B] bg-[#F5F7FA] py-2.5 px-4 rounded-lg text-sm transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              {formErrors.username}
            </div>

            {/* password input field */}
            <div className="flex flex-col gap-2">
              <p className="text-sm">Password</p>
              <div className="relative">
                <input
                  type={inputTypeChange}
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="current-password"
                  className="w-full border-none placeholder-[#6B6B6B] bg-[#F5F7FA] py-3 px-4 pr-10 rounded-lg text-sm transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                >
                  {isShowingPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>
              {formErrors.password}
            </div>

            {/* login button */}
            <div className="items-center font-bold bg-[#121212] text-center py-2.5 rounded-lg mt-4 transition-all duration-200 ease-in-out hover:bg-[#474747] w-full flex justify-center">
              <button
                disabled={isPending}
                className="text-sm w-full text-center flex justify-center items-center text-[#e0e6ff]"
                type="submit"
              >
                {buttonContent}
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
