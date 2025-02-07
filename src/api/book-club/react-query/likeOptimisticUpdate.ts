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

  // 기존 요청을 취소(데이터 충돌 방지)
  await queryClient.cancelQueries({ queryKey: listQueryKey });
  await queryClient.cancelQueries({ queryKey: detailQueryKey });

  // 기존 캐시 데이터 저장
  const previousBookClubs = queryClient.getQueryData<{ bookClubs: BookClub[] }>(
    listQueryKey,
  );
  const previousDetail = queryClient.getQueryData<BookClub>(detailQueryKey);

  // 캐시 데이터 업데이트
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

  // API 요청이 실패 시 이전 상태로 복구할 수 있도록 기존 데이터를 반환
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
