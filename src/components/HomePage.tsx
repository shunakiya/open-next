"use client";

import Image from "next/image";
import { CiLock } from "react-icons/ci";
import { IoFingerPrintOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { BsGear } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa6";
import Link from "next/link";
import { toggleLockAPI } from "@/utils/flaskapi";
import { useEffect, useState } from "react";
import { createNewActivity, getActivityList } from "@/utils/models/activites";
import { Document, WithId } from "mongodb";

interface UserData {
  _id: string;
  username: string;
}

interface Home {
  user: UserData;
}

interface Activity {
  _id?: string;
  timestamp: Date | string;
  isSuccessful: boolean;
  isLocked: boolean;
  type: "app" | "fingerprint" | "nfc";
}

export default function HomePage({ user }: Home) {
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialData, setInitialData] = useState<WithId<Document>[]>([]);

  useEffect(() => {
    async function getInitialData() {
      try {
        console.log("getting initial data");

        const response = await getActivityList(user._id);
        setInitialData(response);
      } catch (error) {
        console.log("Failed to fetch initial user data:", error);
      }
    }

    getInitialData();
  }, [user._id]);

  async function toggleLock() {
    try {
      setIsLoading(true);

      // THIS IS TEMPORARY REMOVE IT LATER (RPI NOT CONNECTED)
      // console.log("creating new activity...");
      // await createNewActivity(user._id, "app", false, false);
      // console.log("finished creating new activity");
      ///////////////////////////////////////////////////

      const data = await toggleLockAPI();
      console.log("loading:", isLoading);

      // set the lock status to whatever is fetched back
      setIsLocked(data.success);
      console.log("set success to:", data.success);

      // create a new activity and set the status to isSuccessful
      await createNewActivity(user._id, "app", data.success, data.success);
    } catch (error) {
      console.error("Error toggling lock:", error);
    } finally {
      setIsLoading(false);
    }
  }

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
            {isLocked ? (
              <button
                onClick={toggleLock}
                className="flex flex-col shadow-md items-center justify-center p-8 bg-red-50 rounded-xl hover:bg-red-100 transition-colors"
              >
                <div className="w-18 h-18 rounded-full bg-red-300 flex items-center justify-center mb-2.5">
                  <CiLock size={40} />
                </div>
                <p className="font-medium text-gray-700">Locked</p>
              </button>
            ) : (
              <button
                onClick={toggleLock}
                className="flex flex-col shadow-md items-center justify-center p-8 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
              >
                <div className="w-18 h-18 rounded-full bg-green-300 flex items-center justify-center mb-2.5">
                  <CiLock size={40} />
                </div>
                <p className="font-medium text-gray-700">Unlocked</p>
              </button>
            )}

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

          {/* recent activity cards */}
          <div className="space-y-4">
            {initialData.length > 0 && initialData[0].activities ? (
              initialData[0].activities
                .slice(-3)
                .reverse()
                .map((activity: Activity, index: number) => {
                  const activityDate = new Date(activity.timestamp);

                  const isToday =
                    new Date().toDateString() === activityDate.toDateString();

                  const isYesterday =
                    new Date(Date.now() - 86400000).toDateString() ===
                    activityDate.toDateString();

                  let timeDisplay;

                  if (isToday) {
                    timeDisplay = `Today at ${activityDate.toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}`;
                  } else if (isYesterday) {
                    timeDisplay = `Yesterday at ${activityDate.toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}`;
                  } else {
                    timeDisplay = `${activityDate.toLocaleDateString()} at ${activityDate.toLocaleTimeString(
                      [],
                      { hour: "2-digit", minute: "2-digit" }
                    )}`;
                  }

                  let activityTypeText;

                  switch (activity.type) {
                    case "app":
                      activityTypeText = "App Unlock";
                      break;
                    case "fingerprint":
                      activityTypeText = "Fingerprint Unlock";
                      break;
                    case "nfc":
                      activityTypeText = "Card Unlock";
                      break;
                  }

                  return (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl shadow-sm"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {activityTypeText}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {timeDisplay}
                          </p>
                        </div>
                        <p
                          className={`px-2 py-1 ${
                            activity.isSuccessful
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          } text-xs rounded-full`}
                        >
                          {activity.isSuccessful ? "Success" : "Unsuccessful"}
                        </p>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
                <p className="text-center text-gray-500">No recent activity</p>
              </div>
            )}
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
