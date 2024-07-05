import { Outlet } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";
import Login from "../../Pages/Auth Pages/Login";

const DashboardProtector = () => {
  const { User } = useUser();
  return User ? <Outlet /> : <Login />;
};

export default DashboardProtector;
