import { useEffect } from "react";
import { useCart } from "../Hooks/useCart";
import { useCheckout } from "../Hooks/useCheckout";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProducts = () => {
  const {
    Products,
    totalPrice,
    shippingPrice,
    calculateTax,
    tax,
    setShippingPrice,
  } = useCart();
  const { shippingMethod, stage } = useCheckout();

  // Calculate the VAT when the total price changes
  useEffect(() => {
    calculateTax(totalAmount);
    // Recalculate VAT whenever the total price changes
  }, [totalPrice, calculateTax, shippingPrice]);

  useEffect(() => {
    if (stage === "Shipping" || stage === "Payment") {
      if (shippingMethod === "standard") {
        setShippingPrice(5);
      } else if (shippingMethod === "rush") {
        setShippingPrice(15);
      } else {
        setShippingPrice(0);
      }
    } else {
      setShippingPrice(0);
    }
  }, [shippingMethod, stage, setShippingPrice]);

  const totalAmount = totalPrice + shippingPrice;

  const totalAmountWithTax = totalAmount + tax;

  return (
    <div className="w-full md:w-1/2">
      {Products.map((product) => (
        <div key={product.id}>
          <CheckoutProduct {...product} />
        </div>
      ))}
      <hr />
      <div className="mt-5">
        <div className="flex justify-between">
          <p>Sub Total: </p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping: </p>
          <p>
            {stage === "Shipping" || stage === "Payment"
              ? `$${shippingPrice}`
              : "Calculating..."}
          </p>
        </div>
        <div className="flex justify-between">
          <p>Subtotal: </p>
          <p>${totalAmount}</p>
        </div>
        <div className="flex justify-between">
          <p>VAT (5%): </p>
          <p>${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-lg">Total: </p>
          <p>
            <span className="text-xs">USD</span>{" "}
            <span className="font-medium">
              ${totalAmountWithTax.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
