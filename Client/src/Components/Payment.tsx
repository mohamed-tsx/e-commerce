import { BiArrowBack } from "react-icons/bi";
import { useCheckout } from "../Hooks/useCheckout";
import { useState, ChangeEvent, FormEvent } from "react";
import { useCart } from "../Hooks/useCart";
import { getCountryName } from "../Lib/Countries";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const apiUrl = "/api/orders/create";
  const { checkoutInfo, shippingMethod, finalAmount, clearCheckout } =
    useCheckout();
  const { shippingPrice, Products, removeAllProducts } = useCart();
  const [validPhoneNumber, setValidPhoneNumber] = useState<string>("");
  const [formData, setFormData] = useState({
    paymentMethod: "EVCPLUS", // Default to EVCPLUS
    phoneNumber: "",
  });
  const {
    email,
    address,
    city,
    apartment,
    selectedCountry,
    firstName,
    lastName,
    postalCode,
  } = checkoutInfo;
  const countryName = getCountryName(selectedCountry);
  const personalAddress = `${apartment} ${address} ${city} ${postalCode}, ${countryName}`;
  const name = `${firstName} ${lastName}`;
  const phoneNumber = formData.phoneNumber;
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // Validate phone number based on payment method
    if (
      formData.paymentMethod === "EVCPLUS" &&
      (!formData.phoneNumber.startsWith("61") ||
        formData.phoneNumber.length !== 9)
    ) {
      setValidPhoneNumber("Enter a valid EVCPLUS number (61XXXXXXX)");
      return;
    }
    if (
      formData.paymentMethod === "ZAAD" &&
      (!formData.phoneNumber.startsWith("69") ||
        formData.phoneNumber.length !== 9)
    ) {
      setValidPhoneNumber("Enter a valid ZAAD number (69XXXXXXX)");
      return;
    }
    if (
      formData.paymentMethod === "SAHAL" &&
      (!formData.phoneNumber.startsWith("63") ||
        formData.phoneNumber.length !== 9)
    ) {
      setValidPhoneNumber("Enter a valid SAHAL number (63XXXXXXX)");
      return;
    }

    setValidPhoneNumber("");

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          address: personalAddress,
          fullName: name,
          phoneNumber,
          shippingMethod,
          items: Products,
          totalPrice: finalAmount,
        }),
      });
      const data = await res.json();
      if (!data.success) {
        setError(data.message);
        return;
      }
      clearCheckout();
      removeAllProducts();
      setFormData({
        phoneNumber: "",
        paymentMethod: "",
      });
      navigate("/success");
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <form className="px-12 py-2" onSubmit={handleSubmit}>
      <div>
        <div className="p-4 border-2 border-gray-500 rounded-md flex flex-col gap-2">
          <div className="flex gap-10">
            <p className="text-gray-500">Contact</p>
            <p>{checkoutInfo.email}</p>
          </div>
          <hr />
          <div className="flex gap-10">
            <p className="text-gray-500">Address</p>
            <p>
              {checkoutInfo.address}, {checkoutInfo.apartment},{" "}
              {checkoutInfo.city}, {checkoutInfo.postalCode}
              {", "}
              {checkoutInfo.selectedCountry}
            </p>
          </div>
          <div className="flex gap-10">
            <p className="text-gray-500">Shipping Method</p>
            <p className="first-letter:uppercase">
              <span className="text-gray-600">{shippingMethod}</span> $
              {shippingPrice}
            </p>
          </div>
        </div>
        <div className="mt-20">
          <p className="uppercase font-semibold">Payment Method</p>
          <hr className="mt-2" />
          <fieldset className="grid grid-cols-3 gap-4 mt-5">
            <legend className="sr-only">PAYMENT METHOD</legend>

            <div>
              <label
                htmlFor="EVCPLUS"
                className={`block cursor-pointer rounded-lg border p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                  formData.paymentMethod === "EVCPLUS"
                    ? "border-black ring-1 ring-black"
                    : "border-gray-100"
                }`}
              >
                <div>
                  <p className="text-gray-700">EVC PLUS</p>
                </div>

                <input
                  type="radio"
                  name="paymentMethod"
                  value="EVCPLUS"
                  id="EVCPLUS"
                  className="sr-only"
                  checked={formData.paymentMethod === "EVCPLUS"}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="ZAAD"
                className={`block cursor-pointer rounded-lg border p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                  formData.paymentMethod === "ZAAD"
                    ? "border-black ring-1 ring-black"
                    : "border-gray-100"
                }`}
              >
                <div>
                  <p className="text-gray-700">ZAAD</p>
                </div>

                <input
                  type="radio"
                  name="paymentMethod"
                  value="ZAAD"
                  id="ZAAD"
                  className="sr-only"
                  checked={formData.paymentMethod === "ZAAD"}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div>
              <label
                htmlFor="SAHAL"
                className={`block cursor-pointer rounded-lg border p-4 text-sm font-medium shadow-sm hover:border-gray-200 ${
                  formData.paymentMethod === "SAHAL"
                    ? "border-black ring-1 ring-black"
                    : "border-gray-100"
                }`}
              >
                <div>
                  <p className="text-gray-700">SAHAL</p>
                </div>

                <input
                  type="radio"
                  name="paymentMethod"
                  value="SAHAL"
                  id="SAHAL"
                  className="sr-only"
                  checked={formData.paymentMethod === "SAHAL"}
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>
        </div>
        <div className="mt-6">
          <label htmlFor="phoneNumber" className="block text-xs">
            Enter the phone number that you want to send the money from
          </label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            id="phoneNumber"
            placeholder={`${
              formData.paymentMethod === "EVCPLUS"
                ? "61XXXXXXX"
                : formData.paymentMethod === "ZAAD"
                ? "69XXXXXXX"
                : "63XXXXXXX"
            }`}
            className="p-2 border-gray-400 rounded-md border-2 mt-2 w-full"
          />
          {validPhoneNumber && (
            <p className="text-sm text-red-500">{validPhoneNumber}</p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="flex text-xs items-center gap-3 mt-5"
          type="button"
          // onClick={() => navigate("/cart")}
        >
          <BiArrowBack /> Return To Shipping
        </button>
        <button
          className="flex text-xs items-center gap-3 mt-5 bg-black text-white p-3 rounded-md"
          type="submit"
        >
          Pay Now
        </button>
      </div>
      {error && <p className="text-red-500 mt-10">{error}</p>}
    </form>
  );
};

export default Payment;
