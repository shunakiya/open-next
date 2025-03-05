import Image from "next/image";

export default function Login() {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen">
      <div className="flex py-3.5 px-3.5 shadow-2xl bg-blue-950 rounded-xl text-left gap-6">
        <div>
          <Image
            src="/assets/images/bg-3.jpg"
            alt=""
            className="rounded-lg h-full w-full"
            width="380"
            height="0"
          />
        </div>

        <div className="flex flex-col gap-9 w-[400px] px-5 py-10">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-medium tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-slate-400 font-light">
                Already have an account?{" "}
                <a className="underline cursor-pointer text-[#7591FF]">
                  Log in
                </a>
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex justify-between">
              <input
                type="text"
                placeholder="First Name"
                className="border-none bg-[#353C5A] py-3 px-4 rounded-lg w-[173px] font-light text-sm text-gray-50/60 transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-none bg-[#353C5A] py-3 px-4 rounded-lg w-[173px] font-light text-sm text-gray-50/60 transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border-none bg-[#353C5A] py-3 px-4 rounded-lg font-light text-sm text-gray-50/60 transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="border-none bg-[#353C5A] py-3 px-4 rounded-lg font-light text-sm text-gray-50/60 transition-all ease-in-out duration-200 focus:ring-1 focus:ring-[#708ae6] focus:outline-none"
            />

            <div className="w-full items-center bg-[#5D7BE8] text-center py-3 rounded-lg mt-4 transition-all duration-200 ease-in-out hover:bg-[#7591FF] ">
              <button className="text-sm">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
