import { useEffect, useState } from "react";
import { Orders } from "../../Services/api";
import { Order } from "../../Types/OrderTypes";
import { LuArchive } from "react-icons/lu";

const Dashbaord = () => {
  const [orders, setOrders] = useState<Order[]>();
  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await Orders();
      setOrders(orders);
    };
    fetchOrders();
  });

  return (
    <div className="">
      <div className="p-6 flex justify-center items-center gap-3">
        <div className="bg-black p-5 w-80 text-white rounded-md">
          <p>Total Products</p>
          <p className="text-2xl font-semibold">$64</p>
        </div>
        <div className="bg-black p-5 w-96 text-white rounded-md">
          <p>Total Earn</p>
          <p className="text-2xl font-semibold">64</p>
        </div>
        <div className="bg-black p-5 w-96 text-white rounded-md">
          <div className="flex justify-between items-center">
            <p>Total Orders</p>
            <LuArchive />
          </div>
          <p className="text-2xl font-semibold">{orders?.length}</p>
        </div>
      </div>
      <div className="p-6">
        <hr />
      </div>
      <div className="p-6">Charts</div>
    </div>
  );
};

export default Dashbaord;
