import { useParams } from "react-router-dom";

const Order = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {id}</p>
      {/* You can add more code here to fetch and display order details based on the order ID */}
    </div>
  );
};

export default Order;
