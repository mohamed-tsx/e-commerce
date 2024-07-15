import { useCart } from "../Hooks/useCart";
import { BiTrash } from "react-icons/bi";

type ProductCartProps = {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

const CartProduct = ({
  id,
  imageUrl,
  productDescription,
  productName,
  productPrice,
  quantity,
}: ProductCartProps) => {
  const removeProduct = useCart((state) => state.removeProduct);
  const addQuantity = useCart((state) => state.addQuantity);
  const decrementQuantity = useCart((state) => state.decrementQuantity);
  const currentProduct = {
    id,
    imageUrl,
    productDescription,
    productName,
    productPrice,
    quantity,
  };

  return (
    <div className="flex items-center border p-4 my-2 rounded">
      <img
        src={imageUrl}
        alt={productName}
        className="w-24 h-24 object-cover mr-4 rounded"
      />
      <div className="flex flex-col flex-1 truncate">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="my-1" title={productDescription}>
          {productDescription}
        </p>
        <p className="text-green-500 font-semibold">
          ${productPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="flex ml-10 gap-4 items-center">
          <button
            className="border p-3 rounded-md px-4 font-semibold"
            onClick={() => decrementQuantity(currentProduct)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="border p-3 rounded-md px-4 font-semibold"
            onClick={() => addQuantity(currentProduct)}
          >
            +
          </button>
        </div>
        <button onClick={() => removeProduct(currentProduct)} className="ml-4">
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
