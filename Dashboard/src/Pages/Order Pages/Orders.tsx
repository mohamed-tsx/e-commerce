import { useEffect, useState } from "react";
import { checkIfOrdersExists } from "../../Services/api";
import AllOrders from "../../Components/Orders/AllOrders";
const Orders = () => {
  const [areOrdersAvailabe, setAreOrdersAvailabe] = useState<null | boolean>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const noProducts = await checkIfOrdersExists();
      setAreOrdersAvailabe(!noProducts);
    };

    fetchData();
  }, []);

  return (
    <div>
      {areOrdersAvailabe === null ? (
        <p>Loading...</p>
      ) : areOrdersAvailabe ? (
        <AllOrders />
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Orders;
