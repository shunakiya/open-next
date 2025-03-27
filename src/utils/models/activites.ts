"use server";

import { ObjectId } from "mongodb";
import { getCollection } from "../db";

export interface Activity {
  _id?: ObjectId;
  timestamp: Date;
  isSuccessful: boolean;
  type: "app" | "fingerprint" | "nfc";
}

// function to create new activity
export async function createNewActivity(
  userId: string,
  type: Activity["type"],
  isSuccessful: boolean
) {
  try {
    const activitiesCollection = await getCollection("activities");

    if (!activitiesCollection) {
      console.error("Failed to access activities collection");
      return null;
    }

    const userObjectId = new ObjectId(userId);

    // check if a document for user already exists
    const existingUserActivities = await activitiesCollection.findOne({
      userId: userObjectId,
    });

    // creating object for new data
    const activity: Activity = {
      timestamp: new Date(),
      isSuccessful,
      type,
    };

    if (existingUserActivities) {
      return await activitiesCollection.updateOne(
        { userId: userObjectId },
        { $push: { activities: activity as any } }
      );
    } else {
      return await activitiesCollection.insertOne({
        userId: userObjectId,
        activities: [activity],
      });
    }
  } catch (error) {
    console.log("Error creating new activity:", error);
    return null;
  }
}

export async function getActivityList(userId: string) {
  try {
    console.log(userId);
  } catch (error) {
    console.log("Error fetching activities:", error);
  }
}
