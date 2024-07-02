import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashbaord from "./Pages/Dashboard/Dashbaord";

export default function App() {
  return (
    <div className="px-16 py-6">
      <Header />
      <Routes>
        <Route path="/" element={<Dashbaord />} />
      </Routes>
    </div>
  );
}
