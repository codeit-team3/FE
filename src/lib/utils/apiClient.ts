import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // 예: 인증 토큰 추가
    const token = localStorage.getItem('token');
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
    // 예: 에러 메시지 처리
    if (error.response?.status === 401) {
      alert('로그인이 필요합니다.');
    }
    return Promise.reject(error);
  },
);

export default apiClient;
