import getUserAuth from "@/utils/getUserAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const authUser = await getUserAuth();

  return (
    <div>
      {authUser ? (
        <div>
          <h1>you are authenticated good job</h1>
        </div>
      ) : (
        <div>{redirect("/")}</div>
      )}
    </div>
  );
}
