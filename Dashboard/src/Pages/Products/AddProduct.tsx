import { ChangeEvent, useState } from "react";
import { addProduct } from "../../Services/api"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    quantity: "",
    productImage: null as File | null,
    productImageUrl: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevData) => ({
        ...prevData,
        productImage: file,
        productImageUrl: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("productName", formData.productName);
      formDataToSend.append("productDescription", formData.productDescription);
      formDataToSend.append("productPrice", formData.productPrice);
      formDataToSend.append("quantity", formData.quantity);
      if (formData.productImage) {
        formDataToSend.append("image", formData.productImage);
      }

      const response = await addProduct(formDataToSend); // Call your API function
      if (response.success) {
        navigate("/products");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-7 py-4 space-y-3">
      <div className="bg-gray-300 p-4 rounded-md space-y-5">
        <div className="flex flex-col text-sm">
          <label htmlFor="productName" className="px-1">
            Title
          </label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            placeholder="Short sleeve t-shirt"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="productDescription" className="px-1">
            Description
          </label>
          <textarea
            name="productDescription"
            value={formData.productDescription}
            onChange={handleInputChange}
            rows={12}
            cols={12}
            className="p-3 w-3/4 rounded-md resize-none"
          />
        </div>
      </div>
      <div className="bg-gray-300 p-4 rounded-md space-y-2">
        <p>Media</p>
        <div className="flex flex-col gap-2 text-xs justify-center items-center outline-2 outline-dashed outline-gray-500 rounded-md p-10 w-3/4">
          <input
            type="file"
            onChange={handleFileChange}
            className="sr-only"
            id="productImage"
            accept="image/*"
          />
          <label
            htmlFor="productImage"
            className="bg-blue-300 text-blue-800 text-sm p-2 rounded-md cursor-pointer"
          >
            Add Image
          </label>
          {formData.productImageUrl && (
            <img
              src={formData.productImageUrl}
              alt="Selected product"
              className="mt-4 max-w-xs rounded-md"
            />
          )}
          <p className="text-gray-500">
            Acceptable files are images only, with a maximum size of 5 MB.
          </p>
        </div>
      </div>
      <div className="bg-gray-300 p-4 rounded-md">
        <div className="flex flex-col text-sm">
          <label htmlFor="productPrice" className="px-1">
            Price
          </label>
          <input
            type="text"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            placeholder="0.00"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
      </div>
      <div className="bg-gray-300 p-4 rounded-md">
        <div className="flex flex-col text-sm">
          <label htmlFor="quantity" className="px-1">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            placeholder="0"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-black text-white py-4 px-6 text-xs rounded-md"
      >
        Save Changes
      </button>
    </form>
  );
};

export default AddProduct;
