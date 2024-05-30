import { BiArrowBack } from "react-icons/bi";
import { useCart } from "../Hooks/useCart";
import CartProduct from "./cartProduct";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
  const cartProducts = useCart((state) => state.Products);
  const navigate = useNavigate();

  return (
    <div>
      {cartProducts.length > 0 ? (
        cartProducts.map((cartProduct) => (
          <div key={cartProduct.id}>
            <CartProduct {...cartProduct} />
            <button className="border py-2 px-10 border-black rounded-md">
              Clear All
            </button>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-12">
          <p className="">There's no products in your cart!</p>
          <button
            onClick={() => navigate("/shop")}
            className="m-4 flex items-center justify-center gap-3"
          >
            <BiArrowBack /> Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default CartProducts;
