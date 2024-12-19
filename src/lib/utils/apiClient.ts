import axios from 'axios';
import { getCookie, deleteCookie } from '@/features/auth/utils/cookies';
import { useAuthStore } from '@/store/authStore';
import { refreshAccessToken } from '@/features/auth/api/auth';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = getCookie('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getCookie('refresh_token');
        if (refreshToken) {
          const response = await refreshAccessToken(refreshToken);
          const newAccessToken = response.accessToken;

          document.cookie = `auth_token=${newAccessToken}; max-age=3600; path=/`;

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiClient(originalRequest);
        }
      } catch (error) {
        console.error('토큰 갱신 중 오류 발생:', error);
        const { setIsLoggedIn } = useAuthStore.getState();
        setIsLoggedIn(false);
        deleteCookie('auth_token');
        deleteCookie('refresh_token');
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
