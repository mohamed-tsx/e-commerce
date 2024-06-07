import { BiArrowBack } from "react-icons/bi";
const Checkout = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <p className="flex gap-2 items-center">Cart</p>
      <button className="m-4 flex items-center justify-center gap-3">
        <BiArrowBack /> Continue Shopping
      </button>
    </div>
  );
};
export default Checkout;
