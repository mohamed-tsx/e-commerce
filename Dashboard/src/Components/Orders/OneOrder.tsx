import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Order as OrderType } from "../../Types/OrderTypes";
import { specieficOrder } from "../../Services/api";

const Order = () => {
  const [order, setOrder] = useState<OrderType | undefined>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchOrder = async () => {
      if (id) {
        try {
          const orderData = await specieficOrder(id);
          setOrder(orderData);
        } catch (error) {
          console.error("Failed to fetch order", error);
        }
      }
    };
    fetchOrder();
  }, [id]);

  return (
    <div className="px-7 py-4">
      {order ? (
        <div>
          <div className="flex gap-3 items-center">
            <h1 className="text-sm">Order Details</h1>
            <p>
              Payment{" "}
              <span className="text-base lowercase bg-yellow-100 px-2 rounded-md">
                {order.paymentStatus}
              </span>
            </p>
            <p>
              <span className="text-base lowercase bg-yellow-100 px-2 rounded-md">
                {order.orderStatus}
              </span>
            </p>
          </div>
          <div className="bg-gray-300 p-4 rounded-md space-y-5">
            <div className="flex flex-col text-sm">
              <p className="px-1">Title</p>
            </div>
            <div className="flex flex-col text-sm">
              <label htmlFor="productDescription" className="px-1">
                Description
              </label>
              <textarea
                name="productDescription"
                // value={formData.productDescription}
                // onChange={handleInputChange}
                rows={12}
                cols={12}
                className="p-3 w-3/4 rounded-md resize-none"
              />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Order;
