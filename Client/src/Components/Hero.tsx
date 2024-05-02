import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex gap-2 w-1/2">
      <div className="mt-56">
        <h1 className="font-semibold text-5xl">
          Zylo <span className=" rounded-md bg-black text-white">|</span> Style
          Centeral
        </h1>
        <p className="font-medium mt-6 text-2xl">
          Welcome to Zylo, where fashion meets comfort. Explore our curated
          collection of clothing, accessories, and more.
        </p>
        <button className="flex bg-black px-16 rounded-md p-2 text-white mt-6">
          <Link to={"/"}>Shop now</Link>
        </button>
      </div>
      <div className="mt-56">
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
