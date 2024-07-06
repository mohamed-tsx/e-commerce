import { Route, Routes } from "react-router-dom";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import Login from "./Pages/Auth Pages/Login";
import DashboardProtector from "./Components/Route Protection/ProtectDashboard";

export default function App() {
  return (
    <div className="px-16 py-6">
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardProtector />}>
          <Route path="/dashboard" element={<Dashbaord />} />
        </Route>
      </Routes>
    </div>
  );
}
