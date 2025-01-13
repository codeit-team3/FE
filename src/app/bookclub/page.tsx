import BookClubMainPage from '@/features/bookclub/components/BookClubMainPage';

export default async function Home() {
  console.log('SSR 함수 실행됨');

  const DEFAULT_PAGE = 1;
  const DEFAULT_SIZE = 10;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/book-clubs?page=${DEFAULT_PAGE}&size=${DEFAULT_SIZE}`,
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
    const initialData = response.bookClubs;

    console.log('SSR로 가져온 데이터:', initialData);

    return <BookClubMainPage initialData={initialData} />;
  } catch (error) {
    console.error('SSR 데이터 가져오기 실패:', error);

    return <BookClubMainPage initialData={[]} />;
  }
}
