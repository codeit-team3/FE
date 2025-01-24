import BookClubMainPage from '@/features/bookclub/components/BookClubMainPage';
import { fetchBookClubs } from '@/lib/utils/fetchBookClubs';

// export const dynamic = 'force-dynamic';

export default async function Home() {
  const initialData = await fetchBookClubs();
  // console.log(
  //   'Server-side NEXT_PUBLIC_API_URL:',
  //   process.env.NEXT_PUBLIC_API_URL,
  // );
  // console.log('something');

  return <BookClubMainPage initialData={initialData} />;
}
