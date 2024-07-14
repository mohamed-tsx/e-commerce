export const checkIfProductsExists = async () => {
  const apiUrl = "api/products/allProducts";
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data.success) {
    const products = data.allProducts;
    return products.length < 1;
  }
  return false;
};

export const Products = async () => {
  const apiUrl = "api/products/adminViewAllProducts";
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data.success) {
    const products = data.allProducts;
    return products;
  }
  return `Failed to fetch products ${data.message}`;
};

export const AddProduct = async () => {
  const apiUrl = "api/products/add";
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data.success) {
    return "Successfully added new product";
  }
  return `Failed to fetch products ${data.message}`;
};
