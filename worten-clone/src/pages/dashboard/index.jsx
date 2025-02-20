import { useAuthContext } from "../../context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuthContext();
  return <div>Dashboard here{JSON.stringify(user)}</div>;
}
