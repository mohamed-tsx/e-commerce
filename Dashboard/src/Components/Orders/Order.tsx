import { Order as OrderTypes } from "../../Types/OrderTypes";

interface ProductProps extends OrderTypes {}

const OrderRow = ({
  address,
  orderStatus,
  paymentStatus,
  total,
  items,
}: ProductProps) => {
  const products = items.map(({ product }) => product);

  return (
    <tr
      className="hover:bg-gray-400"
      onClick={() => {
        console.log("Hi");
      }}
    >
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-5">
        {address}
      </td>
      <td>
        <div
          className={`whitespace-nowrap flex justify-center items-center w-fit px-2 lowercase text-xs ${
            orderStatus === "PENDING" ? "bg-yellow-100 rounded-full" : ""
          }`}
        >
          {orderStatus}
        </div>
      </td>
      <td>
        <div
          className={`whitespace-nowrap flex justify-center items-center  w-fit px-2 lowercase text-xs ${
            paymentStatus === "PENDING" ? "bg-yellow-100 rounded-full" : ""
          }`}
        >
          {paymentStatus}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex">
          {products.map((product) => (
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="rounded-full w-7 h-7"
            />
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{total}</td>
    </tr>
  );
};

export default OrderRow;
