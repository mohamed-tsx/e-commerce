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

export const addProduct = async (formData: FormData) => {
  const apiUrl = "/api/products/add"; // Ensure this is the correct path
  const res = await fetch(apiUrl, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.success) {
    return "Successfully added new product";
  }
  return `Failed to add product: ${data.message}`;
};

// Orders
export const checkIfOrdersExists = async () => {
  const apiUrl = "api/orders/all-orders";
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data.success === true) {
    const products = data.orders;
    return products.length < 1;
  }
  return false;
};

export const Orders = async () => {
  const apiUrl = "api/orders/all-orders";
  const res = await fetch(apiUrl);
  const data = await res.json();
  if (data.success) {
    const orders = data.orders;
    return orders;
  }
  return `Failed to fetch orders ${data.message}`;
};
