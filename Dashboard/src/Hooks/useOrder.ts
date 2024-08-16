import { create } from "zustand";

type OrderStore = {
  tap: string;
  handleOrderTapChange: (tap: string) => void;
};

export const useOrderStore = create<OrderStore>((set) => ({
  tap: "",
  handleOrderTapChange: (tapValue: string) => {
    set({ tap: tapValue });
  },
}));
