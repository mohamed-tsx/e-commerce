import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Product {
  id: string;
  imageUrl: string;
  productDescription: string;
  productName: string;
  productPrice: number;
}

type UseCart = {
  Products: Product[];
};

export const useCart = create<UseCart>()(
  persist(
    (set, get) => ({
      Products: [],
      //   logout: () => {
      //     set(() => ({ User: null }));
      //     localStorage.removeItem("user-storage");
      //   },
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
