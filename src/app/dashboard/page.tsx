import DashboardComponent from "@/components/DashboardComponent";
import getUserAuth from "@/utils/getUserAuth";
import { redirect } from "next/navigation";
import { getCollection } from "@/utils/db";
import { ObjectId, Document } from "mongodb";

interface UserDocument extends Document {
  _id: ObjectId;
  username: string;
}

export default async function Dashboard() {
  const authUser = await getUserAuth();

  if (!authUser) {
    redirect("/");
  }

  // fetch user data from db
  const usersCollection = await getCollection("users");

  if (!usersCollection) {
    console.error("Failed to connect to the users collection");
    redirect("/error");
  }

  const userData = await usersCollection.findOne<UserDocument>({
    _id: new ObjectId(authUser.userId),
  });

  if (!userData) {
    console.error("User not found in database");
    redirect("/");
  }

  return (
    <div>
      <DashboardComponent user={userData} />
    </div>
  );
}
