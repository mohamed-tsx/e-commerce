import { AiOutlineShopping } from "react-icons/ai";
import Logo from "/Zylo Logo.png";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [itemCount, setItemCount] = useState(10);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      <ul className="flex justify-between items-center">
        <img src={Logo} width={40} alt="" />
        <div className="gap-3 items-center hidden md:flex">
          <li>Home</li>
          <div className="relative">
            <AiOutlineShopping size={26} />
            {itemCount > 0 && itemCount > 9 ? (
              <div
                className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold"
                style={{ transform: "translate(50%, -50%)" }}
              >
                9+
              </div>
            ) : (
              <div
                className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold"
                style={{ transform: "translate(50%, -50%)" }}
              >
                {itemCount}
              </div>
            )}
          </div>
        </div>
        <div className="items-center gap-4 hidden md:flex">
          <button className="p-1 px-4 text-center bg-black text-white rounded-full">
            Login
          </button>
          <button className="">Sign Up</button>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <RiMenu4Fill /> : <IoClose />}
        </button>
      </ul>
    </div>
  );
};

export default Header;
