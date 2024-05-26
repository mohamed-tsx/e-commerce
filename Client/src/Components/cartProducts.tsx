import { useCart } from "../Hooks/useCart";

const CartProducts = () => {
  const cartProducts = useCart((state) => state.Products);
  return (
    <div>
      {cartProducts.map((cartProduct) => (
        <div>
          <p>{cartProduct.productName}</p>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
