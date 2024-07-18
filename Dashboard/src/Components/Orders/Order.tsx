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
    <tr>
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-5">
        {address}
      </td>
      <td>
        <div
          className={`whitespace-nowrap flex justify-center items-center w-fit px-2 lowercase ${
            orderStatus === "PENDING" ? "bg-yellow-100 rounded-lg" : ""
          }`}
        >
          {orderStatus}
        </div>
      </td>
      <td>
        <div
          className={`whitespace-nowrap flex justify-center items-center  w-fit px-2 lowercase ${
            paymentStatus === "PENDING" ? "bg-yellow-100 rounded-lg" : ""
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
