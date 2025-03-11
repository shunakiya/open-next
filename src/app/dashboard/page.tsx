import DashboardComponent from "@/components/DashboardComponent";
import getUserAuth from "@/utils/getUserAuth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const authUser = await getUserAuth();

  if (authUser) {
  }

  return (
    <div>
      {authUser ? (
        <div>
          <DashboardComponent />
        </div>
      ) : (
        <div>{redirect("/")}</div>
      )}
    </div>
  );
}
