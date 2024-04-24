import React from "react";
import { Link } from "react-router-dom";
import { FiHome, FiShoppingCart, FiX } from "react-icons/fi";

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
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="flex items-center text-gray-800 hover:text-gray-600"
                onClick={onClose}
              >
                <FiHome className="mr-2" />
                Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/cart"
                className="flex items-center text-gray-800 hover:text-gray-600"
                onClick={onClose}
              >
                <FiShoppingCart className="mr-2" />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
