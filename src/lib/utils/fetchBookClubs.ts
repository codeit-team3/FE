import { BookClubParams } from '@/types/bookclubs';
import axios from 'axios';

export async function fetchBookClubs(filters: BookClubParams, token?: string) {
  try {
    const baseURL =
      typeof window === 'undefined'
        ? process.env.NEXT_PUBLIC_API_URL // 서버사이드일 때 전체 URL
        : ''; // 클라이언트일 때는 상대 경로 사용

    const response = await axios.get(`${baseURL}/book-clubs`, {
      params: filters,
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    });

    return response.data.bookClubs;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error); // 개발 환경에서만 로그 출력
    }
    return [];
  }
}
