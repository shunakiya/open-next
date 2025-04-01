import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { BsGear } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";

interface UserData {
  _id: ObjectId;
  username: string;
}

interface Settings {
  user: UserData;
}

export default function SettingsPage({ user }: Settings) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-1">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">
        <div className="relative">
          <div className="relative w-full pt-8 pb-12 px-6">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src="/assets/images/register/register-bg-2.png"
                alt="Home background"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-white/90 text-xl font-notoserifdisplay">
                  Activities
                </h1>
              </div>

              <div className="text-white">
                <h2 className="text-3xl font-notoserifdisplay">
                  Welcome back, {user.username}
                </h2>
                <p className="text-white/80 pl-1 mt-1.5">
                  Your world is ready to explore
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6">
          <div className="flex flex-col">
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
                Activities
              </h3>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center px-6 py-5 border-t border-gray-100">
          <Link
            href="/home"
            className="flex flex-col items-center text-gray-400 hover:text-[#703BE7] transition-colors"
          >
            <GrHomeRounded className="w-4 h-4 mb-1.5" />
            <p className="text-xs font-medium">Home</p>
          </Link>

          <Link
            href="/activity"
            className="flex flex-col items-center text-[#703BE7]"
          >
            <FaRegClock className="w-4 h-4 mb-1.5" />
            <p className="text-xs font-medium">Activity</p>
          </Link>

          <Link
            href="/settings"
            className="flex flex-col items-center text-gray-400 hover:text-[#703BE7] transition-colors"
          >
            <BsGear className="w-4 h-4 mb-1.5" />
            <p className="text-xs font-medium">Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
