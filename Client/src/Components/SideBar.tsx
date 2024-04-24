import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiX } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-end z-50 md:hidden">
      <div className="bg-white w-64 h-full">
        <div className="flex justify-start p-4">
          <button className="text-xl" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <nav className="p-4">
          <ul className="">
            <li
              className={`mb-3 hover:bg-gray-200 rounded-md ${
                location.pathname === "" ? "bg-gray-200" : ""
              }`}
            >
              <Link to="/" className="flex items-center space-x-2 p-2 rounded">
                <span className="text-xl">
                  <FiHome />
                </span>
                <span className="text-sm">Home</span>
              </Link>
            </li>
            <li
              className={`mb-3 hover:bg-gray-200 rounded-md ${
                location.pathname === "/cart" ? "bg-gray-200" : ""
              }`}
            >
              <Link
                to="/cart"
                className="flex items-center space-x-2 p-2 rounded"
              >
                <span className="text-xl">
                  <AiOutlineShopping />
                </span>
                <span className="text-sm">Cart</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
