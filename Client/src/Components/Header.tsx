import { AiOutlineShopping } from "react-icons/ai";
import Logo from "/Zylo Logo.png";
import { useState } from "react";
const Header = () => {
  const [itemCount, setItemCount] = useState(10);
  return (
    <div className="mt-4">
      <ul className="flex justify-between items-center">
        <img src={Logo} width={50} alt="" />
        <div className="flex gap-3 items-center">
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
        <div className="flex items-center gap-4">
          <button className="p-1 px-4 text-center bg-black text-white rounded-full">
            Login
          </button>
          <button className="">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
