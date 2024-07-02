import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashbaord from "./Pages/Dashboard/Dashbaord";
import Login from "./Pages/Auth Pages/Login";

export default function App() {
  return (
    <div className="px-16 py-6">
      <Header />
      <Routes>
        <Route path="/" element={<Dashbaord />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
