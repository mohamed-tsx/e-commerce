import React from "react";
import { useCart } from "../Hooks/useCart";
import CartProduct from "./cartProduct";

const CartProducts = () => {
  const cartProducts = useCart((state) => state.Products);

  return (
    <div>
      {cartProducts.map((cartProduct) => (
        <div key={cartProduct.id}>
          <CartProduct {...cartProduct} />
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
