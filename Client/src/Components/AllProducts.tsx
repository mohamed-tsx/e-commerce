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
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div className="p-5">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
