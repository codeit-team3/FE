import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';

interface LoginResponse {
  accessToken: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
}

export const login = async (data: LoginFormData) => {
  const response = await apiClient.post<LoginResponse>('/auths/signin', data);
  return response.data;
};
