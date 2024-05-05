import { CiHeart } from "react-icons/ci";
import image4 from "/Hero Images/pexels-elsimage-3394347.jpg";

const ProductItem = () => {
  return (
    <div>
      <div className="p-3">
        <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-sm">
          <img
            alt="Product Image"
            className="w-full h-64 object-cover"
            height={500}
            src={image4}
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width={500}
          />
          <div className="p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">Acme Wireless Headphones</h3>
            <p className="text-gray-500 mb-4">
              Experience the ultimate in sound quality and comfort with our Acme
              Wireless Headphones.
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl font-bold">$99.99</span>
              <div className="flex items-center gap-2">
                <button className="px-7 py-2 bg-black text-white rounded-md">
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
      ;
    </div>
  );
};

export default ProductItem;
