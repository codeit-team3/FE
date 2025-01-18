export async function fetchBookClubs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/book-clubs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const response = await res.json();
    return response.bookClubs;
  } catch (error) {
    console.error('데이터 가져오기 실패:', error);
    return [];
  }
}
