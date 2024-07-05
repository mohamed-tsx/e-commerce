import { RiMenu4Fill } from "react-icons/ri";
import Logo from "../../../public/Zylo Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" className="w-10" />
      <div className="hidden lg:block">
        <Link
          to={"/login"}
          className="flex justify-center items-center bg-black text-white px-4 py-1 rounded-md"
        >
          Login
        </Link>
      </div>
      <div className="block lg:hidden">
        <RiMenu4Fill />
      </div>
    </div>
  );
};

export default Header;
