import { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "/Zylo Logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [itemCount, setItemCount] = useState(10);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <ul className="flex justify-between items-center">
        <img src={Logo} width={40} alt="" />
        <div className="gap-3 items-center hidden md:flex">
          <li>Home</li>
          <div className="relative">
            <AiOutlineShopping size={26} />
            <div
              className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold"
              style={{ transform: "translate(50%, -50%)" }}
            >
              {itemCount > 9 ? "9+" : itemCount}
            </div>
          </div>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <Link
            to="/login"
            className="p-1 px-4 text-center bg-black text-white rounded-full"
          >
            Login
          </Link>
          <Link to="/signup" className="">
            Sign Up
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          {isMenuOpen ? <IoClose /> : <RiMenu4Fill />}
        </button>
      </ul>
      {isMenuOpen && <SideBar onClose={toggleMenu} />}
    </div>
  );
};

export default Header;
