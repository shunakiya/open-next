import { ObjectId } from "mongodb";

interface UserData {
  _id: ObjectId;
  username: string;
}

interface Activity {
  user: UserData;
}

export default function ActivityPage({ user }: Activity) {
  return (
    <div>
      <p>{user.username} from the activity page</p>
    </div>
  );
}
