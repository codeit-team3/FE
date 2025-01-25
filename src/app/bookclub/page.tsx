import BookClubMainPage from '@/features/bookclub/components/BookClubMainPage';
import { fetchBookClubs } from '@/lib/utils/fetchBookClubs';

export default async function Home() {
  const initialData = await fetchBookClubs();

  return <BookClubMainPage initialData={initialData} />;
}
