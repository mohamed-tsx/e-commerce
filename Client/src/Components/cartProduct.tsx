import React from "react";

type ProductCartProps = {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
};

const CartProduct = ({
  id,
  imageUrl,
  productDescription,
  productName,
  productPrice,
}: ProductCartProps) => {
  return (
    <div className="flex items-center border p-4 my-2">
      <img
        src={imageUrl}
        alt={productName}
        className="w-24 h-24 object-cover mr-4"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="my-1">{productDescription}</p>
        <p className="text-green-500 font-semibold">
          ${productPrice.toFixed(2)}
        </p>
        <p className="text-gray-500 text-sm">Product ID: {id}</p>
      </div>
    </div>
  );
};

export default CartProduct;
