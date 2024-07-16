import { useEffect, useState } from "react";
import { checkIfOrdersExists } from "../../Services/api";
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
        <p>There's orders</p>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Orders;
