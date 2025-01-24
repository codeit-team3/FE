export async function fetchBookClubs() {
  // const baseUrl = process.env.API_URL || process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(
      `https://d3eoy4ym225l85.cloudfront.net/api/v1/book-clubs?size=100`,
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
    console.error('데이터 가져오기 실패: ', error);
    return [];
  }
}
