import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserType {
  username: string;
  email: string;
  photo: string;
  role: string;
  id: string;
}

type UserStore = {
  User: UserType | null;
  saveUserInfo: (userInfo: UserType) => void;
  logout: () => void;
};

export const useUser = create<UserStore>()(
  persist(
    (set, get) => ({
      User: null,
      saveUserInfo: (userInfo) => {
        set(() => ({ User: (get().User = userInfo) }));
      },
      logout: () => {
        set(() => ({ User: null }));
        localStorage.removeItem("user-storage");
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
