import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Logo from "/Zylo Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="w-full md:w-1/2 md:flex hidden justify-center items-center h-auto">
        <div className="text-center">
          <img src={Logo} alt="" width={120} className="mx-auto my-auto" />
          <p className="text-gray-700 text-sm">
            Your Premier Destination for Trendsetting Finds
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-10 mt-12">
        <img src={Logo} alt="" className="mx-auto my-auto" width={40} />

        <div>
          <p className="font-semibold mt-10">Create your account</p>
          <form className="mt-5 space-y-2 flex flex-col">
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-xs">
                username <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="p-2 border rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="username" className="text-xs">
                email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                className="p-2 border rounded-lg"
              />
            </div>
            <div className="flex flex-col space-y-1 relative">
              <label htmlFor="password" className="text-xs">
                password <span className="text-red-600">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="password"
                className="p-2 border rounded-lg"
              />
              <span
                className="absolute right-3 top-[29px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </span>
            </div>
            <button
              type="submit"
              className="bg-black p-2 text-white rounded-lg"
            >
              Register
            </button>
          </form>
        </div>
        <p className="text-sm mt-2 text-center md:text-right">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
