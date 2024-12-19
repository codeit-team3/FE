import { useInfiniteQuery } from '@tanstack/react-query';

export const useFetchDataByInfiniteScroll = <T>(
  fetchFn: (
    page: number,
  ) => Promise<{ page: number; totalPages: number; data: T[] }>,
  queryKey: string[],
) => {
  return useInfiniteQuery({
    queryKey: queryKey,
    queryFn: ({ pageParam }) => {
      return fetchFn(pageParam);
    },
    getNextPageParam: (last) => {
      if (last.page < last.totalPages) {
        return last.page + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });
};
