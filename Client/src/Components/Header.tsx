const Header = () => {
  return (
    <div className="mt-4">
      <ul className="flex justify-between items-center">
        <li>Logo</li>
        <div className="flex gap-3">
          <li>Home</li>
          <li>Cart</li>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 px-4 text-center bg-black text-white rounded-full">
            Login
          </button>
          <button className="">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Header;
