import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import countries from "../Lib/Countries";
import { useCheckout } from "../Hooks/useCheckout";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";

interface formDataType {
  email: string;
  selectedCountry: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  phone: string;
}

const Information = () => {
  const { changeStageToShipping } = useCheckout();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState<formDataType>({
    email: "",
    selectedCountry: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !(
        formData.email &&
        formData.address &&
        formData.apartment &&
        formData.city &&
        formData.firstName &&
        formData.lastName &&
        formData.phone &&
        formData.postalCode &&
        formData.selectedCountry
      )
    ) {
      setError("Please fill all the required fields");
      return;
    }
    setError("");
    console.log(formData);
    // changeStageToShipping();
  };
  return (
    <form className="w-1/2" onSubmit={handleSubmit}>
      <div className="text-xs">
        <label htmlFor="email" className="block">
          Contact
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={handleChange}
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
          name="selectedCountry"
          value={formData.selectedCountry}
          onChange={handleChange}
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
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/4 p-2 border-gray-400 rounded-md border-2"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
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
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      <div className="text-xs mt-2">
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          id="apartment"
          placeholder="Appartment, suite, etc (Optional)"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>

      <div className="flex space-x-2 mt-4 text-xs">
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          className="w-1/4 p-2 border-gray-400 rounded-md border-2"
        />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          value={formData.city}
          onChange={handleChange}
          placeholder="Postal Code"
          className="w-1/4 p-2 border-gray-400 rounded-md border-2"
        />
      </div>
      <div className="text-xs mt-2">
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-1/2 p-2 border-gray-400 rounded-md border-2 mt-2"
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      <div className="flex items-center justify-between w-1/2">
        <button
          className=" flex text-xs items-center gap-3 mt-5"
          onClick={() => navigate("/cart")}
        >
          <BiArrowBack /> Return To Cart
        </button>
        <button
          className=" flex text-xs items-center gap-3 mt-5 bg-black text-white p-3 rounded-md"
          type="submit"
        >
          Continue to Shipping <IoArrowForward />
        </button>
      </div>
    </form>
  );
};

export default Information;
