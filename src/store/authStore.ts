import { create } from 'zustand';
import { getCookie } from '@/features/auth/utils/cookies';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  checkLoginStatus: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),

  checkLoginStatus: () => {
    const token = getCookie('auth_token');
    set({ isLoggedIn: !!token });
  },
}));
