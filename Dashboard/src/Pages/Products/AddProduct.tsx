const AddProduct = () => {
  
  return (
    <form className="px-7 py-4 space-y-3">
      <div className="bg-gray-300 p-4 rounded-md space-y-5">
        <div className="flex flex-col text-sm">
          <label htmlFor="title" className="px-1">
            Title
          </label>
          <input
            type="text"
            name="productName"
            id=""
            placeholder="Short sleeve t-shirt"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
        <div className="flex flex-col text-sm">
          <label htmlFor="title" className="px-1">
            Description
          </label>
          <textarea
            name="productDescription"
            id=""
            rows={12}
            cols={12}
            className="p-3 w-3/4 rounded-md resize-none"
          />
        </div>
      </div>
      <div className="bg-gray-300 p-4 rounded-md space-y-2">
        <p>Media</p>
        <div className="flex flex-col gap-2 text-xs justify-center items-center outline-2 outline-dashed outline-gray-500 rounded-md p-10 w-3/4">
          <button className="bg-blue-300 text-blue-800 text-sm p-2 rounded-md">
            Add Image
          </button>
          <p className="text-gray-500">
            Acceptable files are images only, with a maximum size of 5 MB.
          </p>
        </div>
      </div>{" "}
      <div className="bg-gray-300 p-4 rounded-md">
        <div className="flex flex-col text-sm">
          <label htmlFor="title" className="px-1">
            Price
          </label>
          <input
            type="text"
            name="productPrice"
            id=""
            placeholder="0.00"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
      </div>
      <div className="bg-gray-300 p-4 rounded-md">
        <div className="flex flex-col text-sm">
          <label htmlFor="title" className="px-1">
            Quantity
          </label>
          <input
            type="text"
            name="quantity"
            id=""
            placeholder="0"
            className="p-3 w-3/4 rounded-md"
          />
        </div>
      </div>
      <button className="bg-black text-white py-4 px-6 text-xs rounded-md">
        Save Changes
      </button>
    </form>
  );
};

export default AddProduct;
