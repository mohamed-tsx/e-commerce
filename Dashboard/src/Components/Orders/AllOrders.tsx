import { useEffect, useState } from "react";
import { Products } from "../../Services/api";
import { Product as ProductType } from "../../Types/ProductTypes";
// import ProductRow from "./Product"; // Adjust the import path as needed
import { Link } from "react-router-dom";

const AllOrders = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData: ProductType[] = await Products();
        setProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to run this effect only once after the initial render

  return (
    <div className="px-7 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Products</h1>
        <Link
          to="/products/new"
          className="flex items-center justify-center px-4 py-2 bg-black text-white rounded"
        >
          Add Products
        </Link>
      </div>
      <div className="bg-gray-300 w-full mt-10 p-6 rounded">
        <table className="min-w-full divide-y divide-black">
          <thead className="text-sm">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Select
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Inventory
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black text-sm">
            {products.map((product) => (
              //   <ProductRow key={product.id} {...product} />
              <p>{product.imageUrl}</p>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
