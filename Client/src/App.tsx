import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home Page/Home";
import SignUp from "./Pages/Auth Pages/SignUp";
import SignIn from "./Pages/Auth Pages/SignIn";
export default function App() {
  return (
    <div className="px-16 py-6">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<h1>Hi</h1>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Routes>
    </div>
  );
}
