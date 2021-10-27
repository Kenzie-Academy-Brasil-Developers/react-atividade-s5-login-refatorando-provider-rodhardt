import { useAuth } from "../../providers/auth";

function Dashboard() {
  const { Logout }: any = useAuth();

  return <button onClick={() => Logout()}>Logout</button>;
}

export default Dashboard;
