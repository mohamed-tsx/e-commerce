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
    <div className="flex items-center border p-4 my-2 rounded">
      <img
        src={imageUrl}
        alt={productName}
        className="w-24 h-24 object-cover mr-4 rounded"
      />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="my-1">{productDescription}</p>
        <p className="text-green-500 font-semibold">
          ${productPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex ml-10 gap-4 items-center">
        <button className="border p-3 rounded-md px-4 font-semibold">-</button>

        <p>0</p>
        <button className="border p-3 rounded-md px-4 font-semibold">+</button>
      </div>
    </div>
  );
};

export default CartProduct;
