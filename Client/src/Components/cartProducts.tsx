import { BiArrowBack } from "react-icons/bi";
import { useCart } from "../Hooks/useCart";
import CartProduct from "./cartProduct";
import { useNavigate } from "react-router-dom";

const CartProducts = () => {
  const cartProducts = useCart((state) => state.Products);
  const clearAll = useCart((state) => state.removeAllProducts);
  var total = 0;
  const navigate = useNavigate();

  return (
    <div>
      {cartProducts.length > 0 ? (
        cartProducts.map(
          (cartProduct) => (
            (total += cartProduct.productPrice),
            (
              <div key={cartProduct.id}>
                <CartProduct {...cartProduct} />
                <div className="flex justify-between mt-10 items-center">
                  <div>
                    <button
                      onClick={() => clearAll()}
                      className="border py-2 px-10 border-black rounded-md"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-14">
                      <h1 className="font-medium text-xl">Subtotal: </h1>
                      <h1 className="font-medium text-xl">${total}</h1>
                    </div>
                    <div className="flex flex-col">
                      <p>Taxes and pay are included and alot</p>
                      <button className="bg-blue-600 text-white p-2 rounded-md">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )
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
