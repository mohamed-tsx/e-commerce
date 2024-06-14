import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { useCheckout } from "../Hooks/useCheckout";
import { useState, ChangeEvent, FormEvent } from "react";

const Payment = () => {
  const { checkoutInfo, shippingMethod } = useCheckout();
  const [formData, setFormData] = useState({
    paymentMethod: "EVCPLUS", // Default to standard shipping
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({
      paymentMethod: value,
    });
    console.log(formData);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Update shipping method in checkout info
    // setShippingMethod(formData.paymentMethod);
    // changeStageToPayment();
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
              <span className="text-gray-600">{shippingMethod}</span> $5.00
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
                  name="PaymentOption"
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
                  name="PaymentOption"
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
                  name="PaymentOption"
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
      </div>
    </form>
  );
};

export default Payment;
