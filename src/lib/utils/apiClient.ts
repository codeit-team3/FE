import axios from 'axios';
import { checkTokenExpiration } from '@/features/auth/utils/tokenUtils';

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
    // 토큰 유효성 검사
    const isTokenValid = checkTokenExpiration();
    const token = JSON.parse(localStorage.getItem('auth') || '{}').token;
    if (isTokenValid && token) {
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
    // 예: 에러 메시지 처리
    if (error.response?.status === 401) {
      // alert('로그인이 필요합니다.');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
