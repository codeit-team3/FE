import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';
import { useAuthStore } from '@/store/authStore';

interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export const login = async (data: LoginFormData) => {
  try {
    const response = await apiClient.post<LoginResponse>('/auths/signin', data);
    const { token } = response.data;

    const tokenData = {
      token,
      expiresAt: new Date().getTime() + 10000,
    };

    localStorage.setItem('token', token);
    localStorage.setItem('auth', JSON.stringify(tokenData));

    const { setIsLoggedIn, startTokenExpiration } = useAuthStore.getState();
    setIsLoggedIn(true);
    startTokenExpiration(tokenData.expiresAt);

    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};
