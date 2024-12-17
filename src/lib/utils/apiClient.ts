import axios from 'axios';
import { getCookie, deleteCookie } from '@/features/auth/utils/cookies';
import { useAuthStore } from '@/store/authStore';

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
  (error) => {
    if (error.response?.status === 401) {
      const { setIsLoggedIn } = useAuthStore.getState();
      setIsLoggedIn(false);
      deleteCookie('auth_token');
      alert('로그인이 필요합니다.');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
