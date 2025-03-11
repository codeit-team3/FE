import { BookClubParams } from '@/types/bookclubs';
import axios from 'axios';

export async function fetchBookClubs(filters: BookClubParams, token?: string) {
  try {
    const baseURL = process.env.NEXT_PUBLIC_API_URL;

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
