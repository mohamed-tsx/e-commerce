import { Link } from "react-router-dom";
import image1 from "/Hero Images/pexels-ihza-akbar-386432142-22065623.jpg";
import image2 from "/Hero Images/pexels-pixabay-532220.jpg";
import image3 from "/Hero Images/pexels-carlos-santiago-421908853-16065056.jpg";
import image4 from "/Hero Images/pexels-elsimage-3394347.jpg";
import image5 from "/Hero Images/pexels-freestocks-307790.jpg";

const Hero = () => {
  return (
    <div className="flex gap-2">
      <div className="mt-56 w-1/2">
        <h1 className="font-semibold text-5xl">
          Zylo <span className=" rounded-md bg-black text-white">|</span> Style
          Centeral
        </h1>
        <p className="font-medium mt-6 text-2xl">
          Welcome to Zylo where fashion meets comfort. Explore our curated
          collection of clothing, accessories, and more.
        </p>
        <button className="flex bg-black px-16 rounded-md p-2 text-white mt-6">
          <Link to={"/"}>Shop now</Link>
        </button>
      </div>
      <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
          <div className="relative">
            <img
              src={image1}
              alt=""
              width={200}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        </div>
        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
          <div className="relative">
            <img
              src={image2}
              alt=""
              width={200}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="relative">
            <img
              src={image3}
              alt=""
              width={200}
              className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
          </div>
          <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
            <div className="relative">
              <img
                src={image2}
                alt=""
                width={200}
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
            <div className="relative">
              <img
                src={image3}
                alt=""
                width={200}
                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
