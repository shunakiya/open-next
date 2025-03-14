import { ObjectId } from "mongodb";
import { logout } from "@/utils/auth";

interface UserData {
  _id: ObjectId;
  username: string;
}

interface Settings {
  user: UserData;
}

export default function SettingsPage({ user }: Settings) {
  return (
    <div>
      <p>{user.username} from the settings page</p>

      <form action={logout}>
        <button className="cursor-pointer">Logout</button>
      </form>
    </div>
  );
}
