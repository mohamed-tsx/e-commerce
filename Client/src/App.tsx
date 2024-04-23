import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home Page/Home";
export default function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Hi</h1>} />
      </Routes>
    </div>
  );
}
