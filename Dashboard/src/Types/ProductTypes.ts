type orderItem = {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
};

export type Product = {
  id: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  imageUrl: string;
  quantity: number;
  OrderItems: orderItem[];
};
