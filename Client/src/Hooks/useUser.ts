import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserType {
  username: string;
  email: string;
  photo: string;
  role: string;
  id: string;
}
const User = {
  id: "",
  username: "",
  email: "",
  photo: "",
  role: "",
};

type UserStore = {
  User: UserType;
  saveUserInfo: (userInfo: UserType) => void;
};

export const useUser = create<UserStore>()(
  persist(
    (set, get) => ({
      User: User,
      saveUserInfo: (userInfo) => {
        set(() => ({ User: (get().User = userInfo) }));
      },
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
