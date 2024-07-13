import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoMdPricetag } from "react-icons/io";
import { LuArchive } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {
  const location = useLocation();
  2;
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-0 flex justify-start z-50 w-fit">
      <div className="bg-gray-100 h-full w-64 flex flex-col justify-between">
        <div>
          <div className="flex justify-between place-items-center p-5">
            <div className="flex items-center space-x-2">
              <img src="/Zylo Logo.png" alt="Logo" className="w-8" />
            </div>
          </div>
          <nav className="p-4">
            <ul>
              <li
                className={`mb-3 hover:bg-gray-300 rounded-md ${
                  location.pathname === "/" ? "bg-gray-300" : ""
                }`}
              >
                <Link
                  to="/"
                  className="flex items-center space-x-2 p-2 rounded"
                >
                  <span className="text-sm">
                    <FiHome />
                  </span>
                  <span className="text-xs">Home</span>
                </Link>
              </li>
              <li
                className={`mb-3 hover:bg-gray-300 rounded-md ${
                  location.pathname === "/products" ||
                  location.pathname === "/products/new"
                    ? "bg-gray-300"
                    : ""
                }`}
              >
                <Link
                  to="/products"
                  className="flex items-center space-x-2 p-2 rounded"
                >
                  <span className="text-sm">
                    <IoMdPricetag />
                  </span>
                  <span className="text-xs">Products</span>
                </Link>
              </li>
              <li
                className={`mb-3 hover:bg-gray-300 rounded-md ${
                  location.pathname === "/orders" ? "bg-gray-300" : ""
                }`}
              >
                <Link
                  to="/orders"
                  className="flex items-center space-x-2 p-2 rounded"
                >
                  <span className="text-sm">
                    <LuArchive />
                  </span>
                  <span className="text-xs">Orders</span>
                </Link>
              </li>
              <li
                className={`mb-3 hover:bg-gray-300 rounded-md ${
                  location.pathname === "/analysis" ? "bg-gray-300" : ""
                }`}
              >
                <Link
                  to="/analysis"
                  className="flex items-center space-x-2 p-2 rounded"
                >
                  <span className="text-sm">
                    <MdOutlineAnalytics />
                  </span>
                  <span className="text-xs">Analysis</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4">
          <Link
            to="/settings"
            className={`flex items-center space-x-2 p-2 mb-3 hover:bg-gray-300 rounded-md ${
              location.pathname === "/settings" ? "bg-gray-300" : ""
            }`}
          >
            <span className="text-sm">
              <CiSettings />
            </span>
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
