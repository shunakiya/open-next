"use server";

import { ObjectId } from "mongodb";
import { getCollection } from "../db";

export interface Activity {
  _id?: ObjectId;
  userId: ObjectId;
  type: "app" | "fingerprint" | "nfc";
  status: boolean;
  timestamp: Date;
}

// function to create new activity
export async function createNewActivity(
  userId: string,
  type: Activity["type"],
  status: boolean
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

    const activity: Activity = {
      userId: new ObjectId(userId),
      type,
      status,
      timestamp: new Date(),
    };

    if (existingUserActivities) {
      return await activitiesCollection.updateOne(
        { userId: userObjectId },
        { $push: { activities: activity as any } }
      );
    } else {
      return await activitiesCollection.insertOne({
        userId: userObjectId,
        activites: [activity],
      });
    }

    return await activitiesCollection?.insertOne(activity);
  } catch (error) {
    console.log("Error creating new activity:", error);
    return null;
  }
}

export async function getActivityList(userId: string) {
  try {
  } catch (error) {
    console.log("Error fetching activities:", error);
  }
}
