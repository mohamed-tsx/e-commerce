import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
}

// Use cart
type UseCart = {
  Products: Product[];
  addProduct: (product: Product) => void;
};

export const useCart = create<UseCart>()(
  persist(
    (set, get) => ({
      Products: [],
      addProduct: (product) => {
        set((state) => ({
          Products: [...state.Products, product],
        }));
      },
    }),
    {
      name: "product-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
