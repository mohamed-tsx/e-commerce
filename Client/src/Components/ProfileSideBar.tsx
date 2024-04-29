import { useEffect, useState } from "react";
import {
  IoLogOutOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { useUser } from "../Hooks/useUser";

const ProfileSideBar = () => {
  const logout = useUser((state) => state.logout);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSidebarOpen(false); // Close the sidebar when scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed inset-y-0 right-5 top-16 bg-white text-black z-50 overflow-y-auto w-48 shadow-lg md:block h-fit animate-fadeIn rounded-lg ${
        isSidebarOpen ? "" : "hidden"
      }`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          <Link
            to="/profile"
            className="flex gap-2 mt-2 items-center"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoPersonOutline />
            Profile
          </Link>
          <Link
            to="/"
            className="flex gap-2 mt-2 items-center"
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoSettingsOutline />
            Settings
          </Link>
          <button
            className="flex gap-2 mt-2 items-center"
            onClick={() => {
              setIsSidebarOpen(false);
              logout();
            }}
          >
            <IoLogOutOutline />
            Sign Out
          </button>
        </ul>
      </div>
    </div>
  );
};

export default ProfileSideBar;
