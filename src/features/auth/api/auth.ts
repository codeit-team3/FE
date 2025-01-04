'use client';

import apiClient from '@/lib/utils/apiClient';
import { LoginFormData } from '../types/loginFormSchema';
import { useAuthStore } from '@/store/authStore';
import { loginServer, logoutServer } from '@/app/actions';
import { showToast } from '@/components/toast/toast';
import { getCookie } from '@/features/auth/utils/cookies';
import { SignUpFormData } from '../types/sign-up.schema';
import { User } from '@/types/user';
import { queryClient } from '@/lib/utils/reactQueryProvider';
import {
  initializeSocket,
  disconnectSocket,
} from '@/features/chat/utils/socket';

export const login = async (data: LoginFormData) => {
  try {
    const response = await loginServer.bind(null, data)();

    if (response.error) {
      showToast({ message: response.error, type: 'error' });
      throw new Error(response.error);
    }

    queryClient.clear();

    const { setIsLoggedIn } = useAuthStore.getState();
    setIsLoggedIn(true);
    await getUserInfo();

    const token = getCookie('auth_token');
    console.log('token', token);
    if (token) {
      initializeSocket(token);
    }

    showToast({ message: '로그인에 성공했습니다.', type: 'success' });
    return response;
  } catch (error) {
    console.error('로그인 에러:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const accessToken = getCookie('auth_token');
    const refreshToken = getCookie('refresh_token');

    if (!accessToken && !refreshToken) {
      const { setIsLoggedIn, setUser } = useAuthStore.getState();
      setIsLoggedIn(false);
      setUser(null);
      return;
    }

    const response = await logoutServer.bind(null, accessToken, refreshToken)();

    disconnectSocket();

    const { setIsLoggedIn, setUser } = useAuthStore.getState();
    setIsLoggedIn(false);
    setUser(null);
    return response;
  } catch (error) {
    console.error('로그아웃 에러:', error);
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
