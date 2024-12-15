import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';
import { useAuthStore } from '@/store/authStore';
import {
  setCookie,
  deleteCookie,
  getCookie,
} from '@/features/auth/utils/cookies';
import { User } from '../types/user';
import { SignUpFormData } from '../types/sign-up.schema';

export const login = async (data: LoginFormData) => {
  try {
    const response = await apiClient.post<{
      accessToken: string;
      refreshToken: string;
    }>('/auths/signin', data);

    const { accessToken, refreshToken } = response.data;

    setCookie('auth_token', accessToken);
    setCookie('refresh_token', refreshToken);

    const { setIsLoggedIn } = useAuthStore.getState();
    setIsLoggedIn(true);

    await getUserInfo();

    return response.data;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const response = await apiClient.get<User>('/auths/user');
    const { setUser } = useAuthStore.getState();
    setUser(response.data);
    return response.data;
  } catch (error) {
    console.error('사용자 정보 조회 에러:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const accessToken = getCookie('auth_token');
    const refreshToken = getCookie('refresh_token');

    await apiClient.post('/auths/signout', {
      accessToken,
      refreshToken,
    });

    const { setIsLoggedIn, setUser } = useAuthStore.getState();
    setIsLoggedIn(false);
    setUser(null);

    deleteCookie('auth_token');
    deleteCookie('refresh_token');
  } catch (error) {
    console.error('로그아웃 에러:', error);
    throw error;
  }
};

export const signup = async (data: SignUpFormData) => {
  try {
    const response = await apiClient.post('/auths/signup', {
      name: data.name,
      email: data.email,
      password: data.password,
      nickname: data.nickname,
      description: data.description,
    });

    return response.data;
  } catch (error) {
    console.error('회원가입 에러:', error);
    throw error;
  }
};
