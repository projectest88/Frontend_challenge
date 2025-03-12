import { create } from 'zustand';

type AuthStore = {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
  } | null;
  setUser: (user: AuthStore['user']) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));