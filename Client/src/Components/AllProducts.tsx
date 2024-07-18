import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

type Product = {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  quantity: number;
};
const AllProducts = () => {
  const url = "/api/products/allProducts";
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (!data.success) {
          setError(data.message);
          return;
        }
        setProducts(data.allProducts);
      } catch (error) {
        setError("Error fetching products.");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex">
      {error && <p>{error}</p>}
      {products.map((product: Product) => (
        <div key={product.id} className="flex">
          <ProductItem {...product} />
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
