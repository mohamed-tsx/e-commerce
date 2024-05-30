import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
}

type id = string;

// Use cart
type UseCart = {
  Products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  removeAllProducts: () => void;
  totalPrice: number;
};

export const useCart = create<UseCart>()(
  persist(
    (set, get) => ({
      Products: [],
      totalPrice: 0,
      addProduct: (product: Product) => {
        set((state) => ({
          Products: [...state.Products, product],
          totalPrice: state.totalPrice + product.productPrice,
        }));
      },
      removeProduct: (product: Product) => {
        set((state) => ({
          Products: state.Products.filter((item) => item.id !== product.id),
          totalPrice: state.totalPrice - product.productPrice,
        }));
      },
      removeAllProducts: () => {
        set(() => ({
          Products: [],
          totalPrice: 0,
        }));
      },
    }),
    {
      name: "product-storage", // name of the item in the storage
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
