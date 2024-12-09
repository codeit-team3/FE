import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCookie } from '@/features/auth/utils/cookies';
import { User } from '../features/auth/types/user';

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  setIsLoggedIn: (value: boolean) => void;
  setUser: (user: User | null) => void;
  checkLoginStatus: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
      setUser: (user: User | null) =>
        set((state) => {
          return { ...state, user };
        }),
      checkLoginStatus: () => {
        const token = getCookie('auth_token');
        set((state) => {
          return { ...state, isLoggedIn: !!token };
        });
      },
    }),
    {
      name: 'auth-storage',
    },
  ),
);
