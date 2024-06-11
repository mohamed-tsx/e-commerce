import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface checkoutInfo {
  email: string;
  selectedCountry: string;
  firstName: string;
  lastName: string;
  address: string;
  apartment: string;
  city: string;
  postalCode: string;
  phone: string;
}

// Define the type for the state and actions
type CheckoutState = {
  stage: string | null;
  changeStageToCart: () => void;
  changeStageToAddress: () => void;
  changeStageToShipping: () => void;
  changeStageToPayment: () => void;
  checkoutInfo: checkoutInfo;
  setCheckoutInfo: (info: checkoutInfo) => void;
};

// Create the Zustand store with persistence
export const useCheckout = create<CheckoutState>()(
  persist(
    (set) => ({
      stage: "Address",
      checkoutInfo: {
        email: "",
        selectedCountry: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        phone: "",
      },
      changeStageToCart: () => set({ stage: "Cart" }),
      changeStageToAddress: () => set({ stage: "Address" }),
      changeStageToShipping: () => set({ stage: "Shipping" }),
      changeStageToPayment: () => set({ stage: "Payment" }),
      setCheckoutInfo: (info) => {
        set(() => ({
          checkoutInfo: info,
        }));
      },
    }),
    {
      name: "checkout-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
