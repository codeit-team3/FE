import { QueryClient } from '@tanstack/react-query';
import { BookClub } from '@/types/bookclubs';
import { bookClubs } from './queries';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';

export const likeOnMutate = async (
  queryClient: QueryClient,
  id: number,
  isLiked: boolean,
) => {
  const listQueryKey = bookClubs.list(DEFAULT_FILTERS).queryKey;
  const detailQueryKey = bookClubs.detail(id).queryKey;

  const previousBookClubs = queryClient.getQueryData<{
    bookClubs: BookClub[];
  }>(listQueryKey);

  const previousDetail = queryClient.getQueryData<BookClub>(detailQueryKey);

  // 목록 캐시 업데이트
  if (previousBookClubs) {
    queryClient.setQueryData(listQueryKey, {
      ...previousBookClubs,
      bookClubs: previousBookClubs.bookClubs.map((club) =>
        club.id === id ? { ...club, isLiked } : club,
      ),
    });
  }

  // 상세 캐시 업데이트
  if (previousDetail) {
    queryClient.setQueryData(detailQueryKey, {
      ...previousDetail,
      isLiked,
    });
  }

  return { previousBookClubs, previousDetail };
};

export const likeOnError = (
  queryClient: QueryClient,
  id: number,
  context: {
    previousBookClubs?: { bookClubs: BookClub[] };
    previousDetail?: BookClub;
  },
) => {
  const listQueryKey = bookClubs.list(DEFAULT_FILTERS).queryKey;
  const detailQueryKey = bookClubs.detail(id).queryKey;

  // 이전 상태 복구
  if (context.previousBookClubs) {
    queryClient.setQueryData(listQueryKey, context.previousBookClubs);
  }

  if (context.previousDetail) {
    queryClient.setQueryData(detailQueryKey, context.previousDetail);
  }
};
