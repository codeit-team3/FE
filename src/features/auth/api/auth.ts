import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';

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
      expiresAt: new Date().getTime() + 3600000,
    };

    localStorage.setItem('token', token);
    localStorage.setItem('auth', JSON.stringify(tokenData));

    console.log('토큰 저장 완료:', tokenData);

    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};
