import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home Page/Home";
import SignUp from "./Pages/Auth Pages/SignUp";
export default function App() {
  return (
    <div className="p-10">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Hi</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
