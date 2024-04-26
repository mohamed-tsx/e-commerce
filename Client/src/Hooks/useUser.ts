import { create } from "zustand";

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

export const useUser = create<UserStore>((set) => ({
  User: User,
  saveUserInfo: (userInfo) => {
    set(() => ({ User: userInfo }));
  },
}));
