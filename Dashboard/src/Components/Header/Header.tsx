import Logo from "/Zylo Logo.png";
import { Link } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";
const Header = () => {
  const { User } = useUser();
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" className="w-10" />
      <div className="">
        {User ? (
          <div>
            <p>{User.username}</p>
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
