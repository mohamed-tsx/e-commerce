import { useEffect, useState } from "react";
import { Products } from "../../Services/api";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await Products();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run this effect only once after the initial render

  return (
    <div>
      <h1>All Products</h1>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.productName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllProducts;
