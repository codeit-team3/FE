import { useState } from 'react';
import { BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
// import { queryClient } from '@/lib/utils/reactQueryProvider';

const useBookClubList = () => {
  const [filters, setFilters] = useState<BookClubParams>({
    bookClubType: 'ALL',
    meetingType: 'ALL',
    order: 'DESC',
    page: 1,
    size: 10,
    searchKeyword: '',
  });

  const { data, isLoading, error } = useQuery({
    ...bookClubs.list(filters),
  });

  const clubList = data?.bookClubs;

  // console.log('쿼리 키:', bookClubs.list(filters).queryKey);
  console.log('useQuery 데이터:', clubList);

  //   const queryKey = bookClubs.list(filters).queryKey;
  // console.log('캐시 데이터:', queryClient.getQueryData(queryKey));

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return {
    clubList,
    isLoading,
    error,
    filters,
    updateFilters,
  };
};

export default useBookClubList;
