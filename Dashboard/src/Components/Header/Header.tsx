import { RiMenu4Fill } from "react-icons/ri";
import Logo from "../../../public/Zylo Logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" className="w-10" />
      <div className="hidden lg:block">
        <button className="flex justify-center items-center bg-black text-white px-4 py-1 rounded-md">
          Login
        </button>
      </div>
      <div className="block lg:hidden">
        <RiMenu4Fill />
      </div>
    </div>
  );
};

export default Header;
