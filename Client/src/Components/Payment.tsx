import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { useCheckout } from "../Hooks/useCheckout";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const {
    checkoutInfo,
    setShippingMethod,
    changeStageToPayment,
    shippingMethod,
  } = useCheckout();
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
    // Update shipping method in checkout info
    setShippingMethod(formData.shippingMethod);
    changeStageToPayment();
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
      </div>
    </form>
  );
};

export default Payment;
