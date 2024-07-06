import Logo from "/Zylo Logo.png";
import { Link } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";
const Header = () => {
  const { User } = useUser();
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" className="w-8" />
      <div className="">
        {User ? (
          <div className="flex gap-2 items-center">
            <img src={User.photo} className="w-8 rounded-md" alt="" />
            <p className="text-sm">{User.username}</p>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="flex justify-center items-center bg-black text-white px-4 py-1 rounded-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
