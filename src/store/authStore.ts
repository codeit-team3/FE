import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  checkLoginStatus: () => void;
  startTokenExpiration: (expiresAt: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),

  checkLoginStatus: () => {
    const authData = localStorage.getItem('auth');
    if (!authData) {
      set({ isLoggedIn: false });
      return;
    }
    const { expiresAt } = JSON.parse(authData);
    const isValid = new Date().getTime() < expiresAt;
    if (!isValid) {
      localStorage.removeItem('auth');
      set({ isLoggedIn: false });
    }
    set({ isLoggedIn: isValid });
  },

  startTokenExpiration: (expiresAt: number) => {
    const timeUntilExpiration = expiresAt - new Date().getTime();
    if (timeUntilExpiration > 0) {
      setTimeout(() => {
        localStorage.removeItem('auth');
        set({ isLoggedIn: false });
      }, timeUntilExpiration);
    }
  },
}));
