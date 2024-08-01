import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Order as OrderType } from "../../Types/OrderTypes";
import { acceptOrder, acceptPayment, specificOrder } from "../../Services/api";

const Order = () => {
  const [order, setOrder] = useState<OrderType | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchOrder = async () => {
      if (id) {
        try {
          const orderData = await specificOrder(id);
          setOrder(orderData);
        } catch (error) {
          console.error("Failed to fetch order", error);
          setError("Failed to fetch order. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!order) {
    return <p>No order found.</p>;
  }

  const totalAmount = order.items.reduce(
    (sum, item) => sum + item.product.productPrice * item.quantity,
    0
  );

  const handleAcceptPayment = async (orderId: string) => {
    try {
      const result = await acceptPayment(orderId);
    } catch (error) {
      console.error("Failed to accept payment:", error);
      alert("There was an error processing the payment. Please try again.");
    }
  };

  // for accpeping orders
  const handleAcceptOrder = async (orderId: string) => {
    try {
      const result = await acceptOrder(orderId);
    } catch (error) {
      console.error("Failed to accept payment:", error);
      alert("There was an error processing the payment. Please try again.");
    }
  };

  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto rounded-lg shadow-md">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium">Order Details</h1>
            <div className="flex space-x-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs">
                Payment: {order.paymentStatus}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                Order Status: {order.orderStatus}
              </span>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-md font-medium mb-4">Items</h2>
            {order.items.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.product.imageUrl}
                  alt={item.product.productName}
                  className="w-12 h-12 rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-sm font-medium">
                    {item.product.productName}
                  </h3>
                  <p className="text-gray-500 text-xs">
                    ${item.product.productPrice.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="font-medium text-sm">
                  ${(item.product.productPrice * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex justify-end">
              <button
                className={`${
                  order.orderStatus === "ACCEPTED"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black"
                } text-white px-6 py-2 rounded-md text-sm`}
                disabled={order.orderStatus === "ACCEPTED"}
                onClick={() => handleAcceptOrder(order.id)}
              >
                FulFill Items
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="text-base font-medium mb-4">Payment Summary</h2>
            <div className="text-gray-700 space-y-2">
              <div className="flex justify-between text-sm">
                <p>Subtotal ({order.items.length} items)</p>
                <p>${totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Shipping ({order.shippingMethod})</p>
                <p>${order.shippingMethod === "rush" ? "15.00" : "5.00"}</p>
              </div>
              <div className="flex justify-between font-semibold text-sm">
                <p>Total</p>
                <p>${order.total.toFixed(2)}</p>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            <div className="mt-4 flex justify-end">
              <button
                className={`${
                  order.paymentStatus === "PAID"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black"
                } text-white px-6 py-2 rounded-md text-sm`}
                disabled={order.paymentStatus === "PAID"}
                onClick={() => handleAcceptPayment(order.id)}
              >
                Collect Payment
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <h2 className="font-medium mb-4 text-base">Customer Information</h2>
            <hr className="border-t border-gray-300 my-4" />
            <p>{order.name}</p>
            <div className="mt-2">
              <p className="text-gray-500 text-sm">Contact Information</p>
              <p className="text-blue-500 text-sm">{order.email}</p>
              <p className="text-blue-500 text-sm">
                {order.phoneNumber.startsWith("0") ? "" : "0"}
                {order.phoneNumber}
              </p>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Shipping Address</p>
              <p className="text-sm">{order.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
