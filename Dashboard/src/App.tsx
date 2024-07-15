import { Route, Routes, useLocation } from "react-router-dom";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import Login from "./Pages/Auth Pages/Login";
import DashboardProtector from "./Components/Route Protection/ProtectDashboard";
import Sidebar from "./Components/Dashboard Sidebar/SideBar";
import Products from "./Pages/Products/Products";
import AddProduct from "./Pages/Products/AddProduct";
import Orders from "./Pages/Order Pages/Orders";

export default function App() {
  const location = useLocation();
  const isLocationLogin = location.pathname.includes("/login");

  return (
    <div className="flex">
      {!isLocationLogin && <Sidebar />}
      <div
        className={`${!isLocationLogin ? "pl-64 w-full" : "w-full"} px-16 py-6`}
      >
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardProtector />}>
            <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
