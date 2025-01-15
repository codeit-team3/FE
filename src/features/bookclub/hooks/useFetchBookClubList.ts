import { useState } from 'react';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';
import { bookClubMainAPI } from '@/api/book-club';

const useBookClubList = ({ initialData }: { initialData: BookClub[] }) => {
  const [filters, setFilters] = useState<BookClubParams>(DEFAULT_FILTERS);

  const { data, isLoading, isFetching, error } = useQuery({
    ...bookClubs.list(filters),
    //[데이터 그룹 식별, 세부 데이터 유형, 추가 정보(보통 객체로 전달)]
    queryKey: ['bookClubs', 'list', ...(filters ? Object.values(filters) : [])],
    queryFn: () => bookClubMainAPI.getBookClubs(filters),
    initialData: { bookClubs: initialData }, // SSR로 전달받은 초기 데이터 설정
    staleTime: 0,
    // enabled: !!filters, // filters가 존재할 때만 요청 실행
  });

  const clubList = data?.bookClubs;
  console.log(clubList);

  // console.log('queryKey:', ['bookClubs', 'list', ...(filters ? Object.values(filters) : [])]);
  // console.log('filters: ',filters);

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return {
    clubList,
    isLoading,
    isFetching,
    error,
    filters,
    updateFilters,
  };
};

export default useBookClubList;
