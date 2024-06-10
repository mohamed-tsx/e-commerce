import { Outlet } from "react-router-dom";
import { useCart } from "../Hooks/useCart";
import Shop from "../Pages/Shop Page/Shop";

const CheckoutRouteProtector = () => {
  const Cart = useCart((state) => state.Products);
  return Cart.length > 0 ? <Outlet /> : <Shop />;
};

export default CheckoutRouteProtector;
