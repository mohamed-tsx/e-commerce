import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home Page/Home";
import SignUp from "./Pages/Auth Pages/SignUp";
import SignIn from "./Pages/Auth Pages/SignIn";
import Shop from "./Pages/Shop Page/Shop";
import Cart from "./Pages/Cart Page/Cart";
export default function App() {
  return (
    <div className="px-16 py-6">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<>Hi This is checkout page</>} />
      </Routes>
    </div>
  );
}
