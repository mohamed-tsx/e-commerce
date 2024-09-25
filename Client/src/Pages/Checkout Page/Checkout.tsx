import { useEffect } from "react";
import Information from "../../Components/information";
import { useCheckout } from "../../Hooks/useCheckout";
import Shipping from "../../Components/Shipping";
import Payment from "../../Components/Payment";
import CheckoutProducts from "../../Components/CheckoutProducts";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const stage = useCheckout((state) => state.stage);
  const { changeStageToAddress, changeStageToPayment, changeStageToShipping } =
    useCheckout();
  useEffect(() => {
    document.title = "Checkout";
  });
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-12">
      <div className="flex">
        <div className="w-1/2">
          <div className="flex items-center justify-center mb-6">
            <h2 className="sr-only">Steps</h2>
            <div>
              <ol className="flex items-center gap-2 text-xs font-medium text-gray-500 sm:gap-4">
                <button
                  onClick={() => navigate("/cart")}
                  className={`flex items-center ${
                    stage === "Cart" ? "text-blue-600" : ""
                  }`}
                >
                  <span className="size-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">
                    1
                  </span>
                  <span> Cart </span>
                  {stage !== "Cart" && (
                    <span className="rounded bg-green-50 p-1.5 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                <button
                  onClick={() => changeStageToAddress()}
                  className={`flex items-center justify-center gap-2 ${
                    stage === "Address" ? "text-blue-600" : ""
                  }`}
                >
                  <span className="size-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">
                    2
                  </span>
                  <span>Address</span>
                  {stage !== "Address" && (
                    <span className="rounded bg-green-50 p-1.5 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  )}
                </button>

                <button
                  onClick={() => changeStageToShipping()}
                  className={`flex items-center justify-end gap-2 ${
                    stage === "Shipping" ? "text-blue-600" : ""
                  }`}
                >
                  <span className="size-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">
                    3
                  </span>
                  <span> Shipping </span>
                  {stage !== "Payment" ||
                    ("Address" && (
                      <span className="rounded bg-green-50 p-1.5 text-green-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ))}
                </button>

                <button
                  onClick={() => changeStageToPayment()}
                  className={`flex items-center justify-end gap-2 ${
                    stage === "Payment" ? "text-blue-600" : ""
                  }`}
                >
                  <span className="size-6 rounded bg-blue-50 text-center text-[10px]/6 font-bold">
                    4
                  </span>
                  <span> Payment </span>
                </button>
              </ol>
            </div>
          </div>
          {stage === "Address" ? (
            <Information />
          ) : stage === "Payment" ? (
            <Payment />
          ) : stage === "Shipping" ? (
            <Shipping />
          ) : null}
        </div>
        <CheckoutProducts />
      </div>
    </div>
  );
};

export default Checkout;
