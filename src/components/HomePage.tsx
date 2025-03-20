import Image from "next/image";
import { CiLock } from "react-icons/ci";
import { IoFingerPrintOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { BsGear } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import { ObjectId } from "mongodb";
import Link from "next/link";

interface UserData {
  _id: ObjectId;
  username: string;
}

interface Home {
  user: UserData;
}

export default function HomePage({ user }: Home) {
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
                  Home
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

        <div className="px-6 pb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {/* lock/unlock button */}
            <button className="flex flex-col shadow-md items-center justify-center p-8 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <div className="w-18 h-18 rounded-full bg-red-300 flex items-center justify-center mb-2.5">
                <CiLock size={40} />
              </div>
              <p className="font-medium text-gray-700">Locked</p>
            </button>

            {/* fingeprint access settings */}
            <button className="flex flex-col shadow-md items-center justify-center p-8 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-18 h-18 rounded-full bg-blue-300 flex items-center justify-center mb-2.5">
                <IoFingerPrintOutline size={40} />
              </div>
              <p className="font-medium text-gray-700">Fingerprints</p>
            </button>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-8">
            Recent Activity
          </h3>

          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">Card Unlock</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Today at 12:12 PM
                  </p>
                </div>
                <p className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Success
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">
                    Fingerprint Unlock
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Yesterday at 6:49 PM
                  </p>
                </div>
                <p className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Success
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">Tag Unlock</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    2 Days Ago at 4:15 PM
                  </p>
                </div>
                <p className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                  Unsuccessful
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center px-6 py-5 border-t border-gray-100">
          <Link
            href="/home"
            className="flex flex-col items-center text-[#703BE7]"
          >
            <GrHomeRounded className="w-4 h-4 mb-1.5" />
            <p className="text-xs font-medium">Home</p>
          </Link>
          <Link
            href="/activity"
            className="flex flex-col items-center text-gray-400 hover:text-[#703BE7] transition-colors"
          >
            <FaRegClock className="w-4 h-4 mb-1.5" />
            <p className="text-xs font-medium">Activity</p>
          </Link>
          <Link
            href="settings"
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
