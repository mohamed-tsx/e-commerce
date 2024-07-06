import { CiSettings } from "react-icons/ci";
import logo from "/Zylo Logo.png";

const SideBar = () => {
  return (
    <div className="flex flex-col justify-between h-[91vh]">
      <div className="flex flex-col gap-8">
        <img src={logo} alt="" className="w-8" />
        <p>Hi</p>
      </div>
      <CiSettings />
    </div>
  );
};

export default SideBar;
