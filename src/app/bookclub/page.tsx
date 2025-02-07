import BookClubMainPage from '@/features/bookclub/components/BookClubMainPage';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';
import { fetchBookClubs } from '@/lib/utils/fetchBookClubs';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['bookClubs', 'list', DEFAULT_FILTERS],
    queryFn: () => fetchBookClubs(DEFAULT_FILTERS),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookClubMainPage />
    </HydrationBoundary>
  );
}
