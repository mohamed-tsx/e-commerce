import Logo from "../../../public/Zylo Logo.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="" className="w-10" />
      <div>
        <button className="flex justify-center items-center bg-black text-white px-4 py-1 rounded-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
