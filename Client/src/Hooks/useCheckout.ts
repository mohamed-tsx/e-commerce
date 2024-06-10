import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type useCheckout = {
  stage: string;
  changeStageToCart: () => void;
  changeStageToAddress: () => void;
  changeStageToShipping: () => void;
  changeStageToPayment: () => void;
};
export const useCheckout = create<useCheckout>()(
  persist(
    (set) => ({
      stage: "",
      changeStageToCart: () => {
        set(() => ({
          stage: "Cart",
        }));
      },
      changeStageToAddress: () => {
        set(() => ({
          stage: "Address",
        }));
      },
      changeStageToPayment: () => {
        set(() => ({
          stage: "Payment",
        }));
      },
      changeStageToShipping: () => {
        set(() => ({
          stage: "Shipping",
        }));
      },
    }),
    { name: "checkout-storage", storage: createJSONStorage(() => localStorage) }
  )
);
