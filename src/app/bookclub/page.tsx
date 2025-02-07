import BookClubMainPage from '@/features/bookclub/components/BookClubMainPage';
import { DEFAULT_FILTERS } from '@/constants/filters';
import { fetchBookClubs } from '@/lib/utils/fetchBookClubs';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getServerSideToken } from '@/lib/utils/getServerSideToken';

export default async function Home() {
  const queryClient = new QueryClient();
  const token = await getServerSideToken();

  await queryClient.prefetchQuery({
    queryKey: ['bookClubs', 'list', DEFAULT_FILTERS],
    queryFn: () => fetchBookClubs(DEFAULT_FILTERS, token || undefined),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BookClubMainPage />
    </HydrationBoundary>
  );
}
