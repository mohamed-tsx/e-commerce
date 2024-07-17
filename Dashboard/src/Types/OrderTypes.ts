export type Order = {
  id: string;
  address: string;
  orderStatus: string;
  email: string;
  total: number;
  phoneNumber: string;
  name: string;
  shippingMethod: string;
  paymentStatus: string;
  createdAt: string;
  items: Item[];
};

type Item = {
  product: Product;
  orderId: string;
  productId: string;
  quantity: number;
};

type Product = {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  imageUrl: string;
  quantity: number;
};
