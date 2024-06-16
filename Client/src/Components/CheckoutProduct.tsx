type ProductCartProps = {
  imageUrl: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

const CheckoutProduct = ({
  imageUrl,
  productName,
  productPrice,
  quantity,
}: ProductCartProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            src={imageUrl}
            alt={productName}
            className="w-16 h-16 rounded-xl"
          />
          <div
            className="absolute top-2 right-0 bg-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs font-bold"
            style={{ transform: "translate(50%, -50%)" }}
          >
            {quantity}
          </div>
        </div>
        <p>{productName}</p>
      </div>
      <p>${productPrice * quantity}</p>
    </div>
  );
};

export default CheckoutProduct;
