import { BiArrowBack } from "react-icons/bi";
import { useCart } from "../Hooks/useCart";
import CartProduct from "./cartProduct";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
  const cartProducts = useCart((state) => state.Products);
  const clearAll = useCart((state) => state.removeAllProducts);
  const navigate = useNavigate();
  const total = useCart((state) => state.totalPrice);
  const totalItems = useCart((state) => state.totalItems);

  return (
    <div>
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map((cartProduct) => (
            <div key={cartProduct.id}>
              <CartProduct {...cartProduct} />
            </div>
          ))}
          <div className="flex justify-between mt-10 items-center">
            <div>
              <button
                onClick={() => clearAll()}
                className="border py-2 px-10 border-black rounded-md"
              >
                Clear All
              </button>
              <p>
                You have {totalItems} {totalItems > 1 ? "Items" : "Item"} in
                your cart
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-14">
                <h1 className="font-medium text-lg">Subtotal: </h1>
                <h1 className="font-medium text-lg">${total}</h1>
              </div>
              <div className="flex flex-col">
                <p>Taxes and Shipping calculated at checkout</p>
                <button
                  className="bg-blue-600 text-white p-2 rounded-md mt-2"
                  onClick={() => navigate("/checkout")}
                >
                  Secure Checkout
                </button>
                <button
                  onClick={() => navigate("/shop")}
                  className="mt-3 flex items-center justify-start gap-3"
                >
                  <BiArrowBack /> Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
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
