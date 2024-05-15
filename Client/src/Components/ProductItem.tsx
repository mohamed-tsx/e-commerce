import { CiHeart } from "react-icons/ci";
import { useCart } from "../Hooks/useCart";

type ProductProps = {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
};

const ProductItem = ({
  id,
  imageUrl,
  productDescription,
  productName,
  productPrice,
}: ProductProps) => {
  const addProducts = useCart((state) => state.addProduct);
  const products = useCart((state) => state.Products);
  console.log(products);
  const currentProduct = {
    id,
    imageUrl,
    productDescription,
    productName,
    productPrice,
  };

  return (
    <div className="p-3 flex">
      <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
        <img
          alt="Product Image"
          className="w-full h-64 object-cover"
          src={imageUrl}
          style={{
            aspectRatio: "500/500",
            objectFit: "cover",
          }}
        />
        <div className="p-6 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{productName}</h3>
          <p className="text-gray-500 mb-4">{productDescription}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="text-2xl font-bold">${productPrice}</span>
            <div className="flex items-center gap-2">
              <button
                className="px-7 py-2 bg-black text-white rounded-md"
                onClick={() => addProducts(currentProduct)}
              >
                Add to Cart
              </button>
              <button className="p-3 rounded-md hover:bg-gray-200">
                <CiHeart className="w-5 h-5" />
                <span className="sr-only">Add to favorites</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
