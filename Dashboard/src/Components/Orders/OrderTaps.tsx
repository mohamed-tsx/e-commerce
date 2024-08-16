import { Link } from "react-router-dom";

interface OrderTapsProps {
  text: string;
  to: string;
}

const OrderTaps = ({ text, to }: OrderTapsProps) => {
  return (
    <Link
      to={`/${to}`}
      className="flex justify-center items-center px-2 py-0.5 rounded-md bg-black text-white text-sm"
    >
      {text}
    </Link>
  );
};

export default OrderTaps;
