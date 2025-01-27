import { useState } from 'react';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
import { DEFAULT_FILTERS } from '@/constants/filters';

const useBookClubList = ({ initialData }: { initialData: BookClub[] }) => {
  const [filters, setFilters] = useState<BookClubParams>(DEFAULT_FILTERS);

  const { data, isLoading, isFetching, error } = useQuery({
    ...bookClubs.list(filters),
    initialData: { bookClubs: initialData },
    initialDataUpdatedAt: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return {
    clubList: data?.bookClubs,
    isLoading,
    isFetching,
    error,
    filters,
    updateFilters,
  };
};

export default useBookClubList;
