import { logout } from "@/actions/auth";

export default function DashboardComponent() {
  return (
    <div>
      <p>okasdokasdokasokadoskasodkasokad</p>

      <form action={logout}>
        <button>Logout</button>
      </form>
    </div>
  );
}
