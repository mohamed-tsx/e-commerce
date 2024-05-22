import { useEffect, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import Logo from "/Zylo Logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import { useUser } from "../Hooks/useUser";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import ProfileSideBar from "./ProfileSideBar";
import { useCart } from "../Hooks/useCart";

const Header = () => {
  const user = useUser((state) => state.User);
  const products = useCart((state) => state.Products);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  const [isProfileSideBarOpen, setIsProfileSideBarOpen] =
    useState<Boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsProfileSideBarOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <ul className="flex justify-between items-center">
        <Link to="/">
          <img src={Logo} width={40} alt="" />
        </Link>
        <div className="gap-3 items-center hidden lg:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <div className="relative">
            <Link to="/cart">
              <AiOutlineShopping size={26} />
            </Link>
            {products.length > 0 && (
              <div
                className="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold"
                style={{ transform: "translate(50%, -50%)" }}
              >
                {products.length > 9 ? "9+" : products.length}
              </div>
            )}
          </div>
        </div>
        {user ? (
          <div className="items-center gap-2 hidden lg:flex border-2 p-2 rounded-full">
            <img src={user.photo} width={15} className="rounded-full" />
            <p className="text-xs">{user.username}</p>
            <button
              onClick={() => setIsProfileSideBarOpen(!isProfileSideBarOpen)}
            >
              {isProfileSideBarOpen ? (
                <FaCaretUp color="grey" />
              ) : (
                <FaCaretDown color="grey" />
              )}
            </button>
          </div>
        ) : (
          <div className="items-center gap-4 hidden lg:flex">
            <Link
              to="/signin"
              className="p-1 px-4 text-center bg-black text-white rounded-full"
            >
              Login
            </Link>
            <Link to="/signup" className="">
              Sign Up
            </Link>
          </div>
        )}
        <button onClick={toggleMenu} className="lg:hidden">
          {isMenuOpen ? <IoClose /> : <RiMenu4Fill />}
        </button>
      </ul>
      {isMenuOpen && <SideBar onClose={toggleMenu} />}
      {isProfileSideBarOpen && <ProfileSideBar />}
    </div>
  );
};

export default Header;
