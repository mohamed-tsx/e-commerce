import { useEffect, useState } from "react";
import { accptedOrders, Orders } from "../../Services/api";
import { Order as OrderType } from "../../Types/OrderTypes";
import OrderRow from "./Order";
import OrderTaps from "./OrderTaps";
import { useOrderStore } from "../../Hooks/useOrder";

const AllOrders = () => {
  const [orders, setOrder] = useState<OrderType[]>([]);
  const tap = useOrderStore((state) => state.tap);

  useEffect(() => {
    console.log(tap);
    const fetchOrders = async () => {
      try {
        let orderData: OrderType[];

        if (tap === "Accepted") {
          orderData = await accptedOrders(); // Fetch orders based on the "Accepted" condition
        } else {
          orderData = await Orders(); // Fetch orders based on the other condition
        }

        setOrder(orderData);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      }
    };
    fetchOrders();
  }, [tap]); // Add `tap` to the dependency array

  console.log("data ../// ", orders);

  return (
    <div className="px-7 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium">Orders</h1>
      </div>
      <div className="flex gap-3 items-center">
        {/* Ensure that each `OrderTaps` has unique text */}
        <OrderTaps text="Accepted" />
        <OrderTaps text="All Orders" />
      </div>
      <div className="bg-gray-300 w-full mt-10 p-6 rounded text-xs">
        <table className="min-w-full divide-y divide-black">
          <thead className="text-sm">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Products
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black text-sm">
            {orders
              ? orders?.map((order) => <OrderRow key={order.id} {...order} />)
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
