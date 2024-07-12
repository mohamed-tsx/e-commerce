import { Product as ProductType } from "../../Types/ProductTypes";

interface ProductProps extends ProductType {}

const ProductRow = ({
  imageUrl,
  productName,
  quantity,
  OrderItems,
}: ProductProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap flex items-center gap-5">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded-md"
        />
        <img
          src={imageUrl}
          alt={productName}
          className="w-10 h-10 rounded-md"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap ">{productName}</td>
      <td className="px-6 py-4 whitespace-nowrap">{OrderItems.length}</td>
      <td className="px-6 py-4 whitespace-nowrap">{quantity}</td>
    </tr>
  );
};

export default ProductRow;
