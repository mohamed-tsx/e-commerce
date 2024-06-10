import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

// Define the type for the state and actions
type CheckoutState = {
  stage: string | null;
  changeStageToCart: () => void;
  changeStageToAddress: () => void;
  changeStageToShipping: () => void;
  changeStageToPayment: () => void;
};

// Create the Zustand store with persistence
export const useCheckout = create<CheckoutState>()(
  persist(
    (set) => ({
      stage: "Address",
      changeStageToCart: () => set({ stage: "Cart" }),
      changeStageToAddress: () => set({ stage: "Address" }),
      changeStageToShipping: () => set({ stage: "Shipping" }),
      changeStageToPayment: () => set({ stage: "Payment" }),
    }),
    {
      name: "checkout-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
