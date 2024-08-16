import { useOrderStore } from "../../Hooks/useOrder"; // Ensure the path is correct

interface OrderTapsProps {
  text: string;
}

const OrderTap = ({ text }: OrderTapsProps) => {
  const handleOrderTapChange = useOrderStore(
    (state) => state.handleOrderTapChange
  );

  return (
    <button
      onClick={() => handleOrderTapChange(text)}
      className="flex justify-center items-center px-2 py-0.5 rounded-md bg-black text-white text-sm"
    >
      {text}
    </button>
  );
};

export default OrderTap;
