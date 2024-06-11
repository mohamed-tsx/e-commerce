import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import countries from "../Lib/Countries";
import { useCheckout } from "../Hooks/useCheckout";
import { useNavigate } from "react-router-dom";

const Information = () => {
  const { changeStageToShipping } = useCheckout();
  const navigate = useNavigate();
  return (
    <div className="w-1/2">
      <div className="text-xs">
        <label htmlFor="email" className="block">
          Contact
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      <div className="mt-12">
        <label htmlFor="shipping-info" className="block text-xs">
          Shipping Information
        </label>
        <select
          name="shipping-info"
          id="shipping-info"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 text-xs mt-2"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
        <div className="flex space-x-2 mt-4 text-xs">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="w-1/4 p-2 border-gray-400 rounded-md border-2"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="w-1/4 p-2 border-gray-400 rounded-md border-2"
          />
        </div>
      </div>
      <div className="text-xs mt-2">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      <div className="text-xs mt-2">
        <input
          type="text"
          name="appartment"
          id="appartment"
          placeholder="Appartment, suite, etc (Optional)"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      <div className="flex space-x-2 mt-4 text-xs">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          className="w-1/4 p-2 border-gray-400 rounded-md border-2"
        />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="Postal Code"
          className="w-1/4 p-2 border-gray-400 rounded-md border-2"
        />
      </div>
      <div className="text-xs mt-2">
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      <div className="flex items-center justify-between w-1/2">
        <button
          className=" flex text-xs items-center gap-3 mt-5"
          onClick={() => navigate("/cart")}
        >
          <BiArrowBack /> Return To Cart
        </button>
        <button
          className=" flex text-xs items-center gap-3 mt-5 bg-black text-white p-3 rounded-md"
          onClick={() => changeStageToShipping()}
        >
          Continue to Shipping <IoArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Information;
