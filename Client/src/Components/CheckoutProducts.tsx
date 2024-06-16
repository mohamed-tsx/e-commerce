import { useCart } from "../Hooks/useCart";
import CheckoutProduct from "./CheckoutProduct";

const CheckoutProducts = () => {
  const { Products } = useCart();
  return (
    <div className="w-1/2">
      {Products.map((product) => (
        <div key={product.id}>
          <CheckoutProduct {...product} />
        </div>
      ))}
    </div>
  );
};

export default CheckoutProducts;
