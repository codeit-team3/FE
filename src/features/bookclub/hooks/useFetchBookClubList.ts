import { useState } from 'react';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';

const useBookClubList = ({ initialData }: { initialData: BookClub[] }) => {
  // const [filters, setFilters] = useState<BookClubParams>(defaultFilters);
  const [filters, setFilters] = useState<BookClubParams>(DEFAULT_FILTERS);

  const { data, isLoading, error } = useQuery({
    ...bookClubs.list(filters),
    initialData: { bookClubs: initialData }, // SSR로 전달받은 초기 데이터 설정
    staleTime: 1000 * 60 * 5, // 5분 동안 데이터를 Fresh 상태로 유지
  });

  const clubList = data?.bookClubs;
  console.log(clubList);

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
