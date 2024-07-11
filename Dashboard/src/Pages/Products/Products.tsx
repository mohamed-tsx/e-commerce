import { useEffect, useState } from "react";
import { checkIfProductsExists } from "../../Services/api";
import AllProducts from "../../Components/Products/AllProducts";
const Products = () => {
  const [areProductsAvailable, setAreProductsAvailable] = useState<
    null | boolean
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const noProducts = await checkIfProductsExists();
      setAreProductsAvailable(!noProducts);
    };

    fetchData();
  }, []);

  return (
    <div>
      {areProductsAvailable === null ? (
        <p>Loading...</p>
      ) : areProductsAvailable ? (
        <AllProducts />
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Products;
