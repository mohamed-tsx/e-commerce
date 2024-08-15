import { Route, Routes, useLocation } from "react-router-dom";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import Login from "./Pages/Auth Pages/Login";
import DashboardProtector from "./Components/Route Protection/ProtectDashboard";
import Sidebar from "./Components/Dashboard Sidebar/SideBar";
import Products from "./Pages/Products/Products";
import AddProduct from "./Pages/Products/AddProduct";
import Orders from "./Pages/Order Pages/Orders";
import Order from "./Components/Orders/OneOrder";
import PackingSlip from "./Pages/Slip Page/Packing-Slip";
import Notifications from "./Pages/Notifications Page/Notifications";

export default function App() {
  const location = useLocation();
  const isLoginPage = location.pathname.includes("/login");
  const isPackingSlipPage = location.pathname.includes("/packing-slip");

  return (
    <div className="flex">
      {!isLoginPage && !isPackingSlipPage && <Sidebar />}

      <div
        className={`${
          !isLoginPage && !isPackingSlipPage ? "pl-64 w-full" : "w-full"
        } px-16 py-6`}
      >
        <Routes>
          <Route path="/" element={<Dashbaord />} />
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardProtector />}>
            <Route path="/dashboard" element={<Dashbaord />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/new" element={<AddProduct />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/packing-slip/:id" element={<PackingSlip />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
