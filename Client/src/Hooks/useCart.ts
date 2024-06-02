import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
  quantity: number;
}

// Use cart
type UseCart = {
  Products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  removeAllProducts: () => void;
  totalPrice: number;
  totalItems: number;
  addQuantity: (product: Product) => void;
};

export const useCart = create<UseCart>()(
  persist(
    (set, get) => ({
      Products: [],
      totalPrice: 0,
      totalItems: 0,
      addProduct: (product: Product) => {
        const cart = get().Products;
        set((state) => ({
          Products: [...cart, { ...product, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + product.productPrice,
        }));
      },
      removeProduct: (product: Product) => {
        set((state) => ({
          Products: state.Products.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - product.quantity,
          totalPrice:
            state.totalPrice - product.productPrice * product.quantity,
        }));
      },
      removeAllProducts: () => {
        set(() => ({
          Products: [],
          totalPrice: 0,
        }));
      },
      addQuantity: (product) => {
        const cart = get().Products;
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: (item.quantity as number) + 1 }
              : item
          );
          set((state) => ({
            Products: updatedCart,
            totalPrice: state.totalPrice + product.productPrice,
            totalItems: state.totalItems + 1,
          }));
        }
      },
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
