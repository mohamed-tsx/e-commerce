import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { useCheckout } from "../Hooks/useCheckout";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks/useCart";

const Shipping = () => {
  const {
    checkoutInfo,
    setShippingMethod,
    changeStageToPayment,
    updateFinalAmount,
  } = useCheckout();
  const { setShippingPrice, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    shippingMethod: "standard", // Default to standard shipping
  });
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFormData({
      shippingMethod: value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    let shippingPrice = formData.shippingMethod === "standard" ? 5 : 15;
    // Set the shipping price based on the selected shipping method
    if (formData.shippingMethod === "standard") {
      setShippingPrice(5);
    } else {
      setShippingPrice(15);
    }
    // Update shipping method in checkout info
    setShippingMethod(formData.shippingMethod);
    updateFinalAmount(totalPrice + shippingPrice);
    changeStageToPayment();
  };

  useEffect(() => {
    // Set the initial shipping price when the component mounts
    setShippingPrice(formData.shippingMethod === "standard" ? 5 : 15);
  }, [formData.shippingMethod, setShippingPrice]);

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
        </div>
        <div className="mt-20">
          <p className="uppercase font-semibold">Shipping Method</p>
          <hr className="mt-2" />
          <fieldset className="space-y-4">
            <legend className="sr-only">Shipping</legend>
            <div>
              <label
                htmlFor="ShippingStandard"
                className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-black has-[:checked]:ring-1 has-[:checked]:ring-black"
              >
                <p className="text-gray-700">Standard {"(5-7) Days"}</p>
                <p className="text-gray-900">$5.00</p>
                <input
                  type="radio"
                  name="ShippingOption"
                  value="standard"
                  id="ShippingStandard"
                  className="sr-only"
                  checked={formData.shippingMethod === "standard"}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label
                htmlFor="ShippingPriority"
                className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-black has-[:checked]:ring-1 has-[:checked]:ring-black"
              >
                <p className="text-gray-700">Rush {"(2-3) Days"}</p>
                <p className="text-gray-900">$15.00</p>
                <input
                  type="radio"
                  name="ShippingOption"
                  value="rush"
                  id="ShippingPriority"
                  className="sr-only"
                  checked={formData.shippingMethod === "rush"}
                  onChange={handleChange}
                />
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="flex text-xs items-center gap-3 mt-5"
          onClick={() => navigate("/cart")}
          type="button"
        >
          <BiArrowBack /> Return To Cart
        </button>
        <button
          className="flex text-xs items-center gap-3 mt-5 bg-black text-white p-3 rounded-md"
          type="submit"
        >
          Continue to Payment <IoArrowForward />
        </button>
      </div>
    </form>
  );
};

export default Shipping;
