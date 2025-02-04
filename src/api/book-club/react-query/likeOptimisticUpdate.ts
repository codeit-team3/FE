import { QueryClient } from '@tanstack/react-query';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { bookClubs } from './queries';
import { DEFAULT_FILTERS } from '@/constants/filters';

export const likeOnMutate = async (
  queryClient: QueryClient,
  id: number,
  isLiked: boolean,
  filter?: BookClubParams,
) => {
  const listQueryKey = ['bookClubs', 'list', filter || DEFAULT_FILTERS];
  const detailQueryKey = bookClubs.detail(id).queryKey;

  await queryClient.cancelQueries({ queryKey: listQueryKey });
  await queryClient.cancelQueries({ queryKey: detailQueryKey });

  // console.log('🔍 수정된 listQueryKey:', listQueryKey);
  // console.log('🔍 현재 활성화된 모든 쿼리키:', queryClient.getQueriesData({}));

  const previousBookClubs = queryClient.getQueryData<{ bookClubs: BookClub[] }>(
    listQueryKey,
  );
  const previousDetail = queryClient.getQueryData<BookClub>(detailQueryKey);

  // if (!previousBookClubs) {
  //   console.warn('⚠️ 캐시된 데이터가 없습니다. queryKey 확인 필요:', listQueryKey);
  //   queryClient.invalidateQueries({ queryKey: listQueryKey });
  // }

  if (previousBookClubs) {
    queryClient.setQueryData(listQueryKey, (old: any) =>
      old?.map((club: BookClub) =>
        club.id === id ? { ...club, isLiked } : club,
      ),
    );
  }

  if (previousDetail) {
    queryClient.setQueryData(detailQueryKey, { ...previousDetail, isLiked });
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
