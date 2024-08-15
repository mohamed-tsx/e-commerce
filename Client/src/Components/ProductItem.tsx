import { CiHeart } from "react-icons/ci";
import { useCart } from "../Hooks/useCart";
import { useEffect, useState } from "react";

type ProductProps = {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

const ProductItem = ({
  id,
  imageUrl,
  productDescription,
  productName,
  productPrice,
  quantity,
}: ProductProps) => {
  const addProducts = useCart((state) => state.addProduct);
  const allProducts = useCart((state) => state.Products);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const currentProduct = {
    id,
    imageUrl,
    productDescription,
    productName,
    productPrice,
    quantity,
  };

  const handleAddingProductToCart = (productDetails: any) => {
    const productExists = allProducts.some(
      (product) => product.id === productDetails.id
    );
    if (!productExists && productDetails.quantity > 0) {
      addProducts(productDetails);
      setIsProductInCart(true);
    }
  };

  useEffect(() => {
    const productExists = allProducts.some(
      (product) => product.id === currentProduct.id
    );
    setIsProductInCart(productExists);
  }, [allProducts, currentProduct.id]);

  return (
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
      <div className="p-5 flex flex-col">
        <h3 className="font-bold mb-2 text-sm">{productName}</h3>
        <p className="text-gray-500 mb-4 truncate text-xs">
          {productDescription}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-base">${productPrice}</span>
          <div className="flex items-center gap-2">
            {isProductInCart ? (
              <button
                className="px-5 py-2 bg-gray-400 text-white rounded-md"
                disabled={true}
              >
                Already In Cart
              </button>
            ) : quantity < 1 ? (
              <button
                className="px-5 py-2 bg-gray-400 text-white rounded-md"
                disabled={true}
              >
                Out of Stock
              </button>
            ) : (
              <button
                className="px-5 py-2 bg-black text-white rounded-md text-sm"
                onClick={() => handleAddingProductToCart(currentProduct)}
              >
                Add to Cart
              </button>
            )}
            <button className="p-3 rounded-md hover:bg-gray-200">
              <CiHeart className="w-5 h-5" />
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
