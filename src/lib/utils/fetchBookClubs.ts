import { BookClubParams } from '@/types/bookclubs';

export async function fetchBookClubs(filters: BookClubParams) {
  try {
    // filters 객체를 URLSearchParams로 변환
    const queryParams = new URLSearchParams(
      Object.entries(filters)
        .filter(([, value]) => value !== undefined && value !== null) // undefined, null 값 제거
        .map(([key, value]) => [key, String(value)]), // 값들을 문자열로 변환
    ).toString();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs?${queryParams}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();
    return response.bookClubs;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error); // 개발 환경에서만 로그 출력
    }
    return [];
  }
}
