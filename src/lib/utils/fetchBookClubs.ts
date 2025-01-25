export async function fetchBookClubs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs?size=100`,
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
