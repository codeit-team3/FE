import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';
import { useAuthStore } from '@/store/authStore';
import { setCookie } from '@/features/auth/utils/cookies';

export const login = async (data: LoginFormData) => {
  try {
    const response = await apiClient.post<{ token: string }>(
      '/auths/signin',
      data,
    );
    const { token } = response.data;

    setCookie('auth_token', token);
    const { setIsLoggedIn } = useAuthStore.getState();
    setIsLoggedIn(true);

    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};
