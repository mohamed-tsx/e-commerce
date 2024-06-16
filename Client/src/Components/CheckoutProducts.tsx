import { useCart } from "../Hooks/useCart";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProducts = () => {
  const { Products, totalPrice } = useCart();
  return (
    <div className="w-1/2">
      {Products.map((product) => (
        <div key={product.id}>
          <CheckoutProduct {...product} />
        </div>
      ))}
      <hr />
      <div></div>
      <div className="mt-5">
        <div className="flex justify-between">
          <p>Sub Total: </p>
          <p>${totalPrice}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping: </p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-lg">Totol: </p>
          <p>
            {" "}
            <span className="text-xs">USD</span>{" "}
            <span className="font-medium">${totalPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProducts;
