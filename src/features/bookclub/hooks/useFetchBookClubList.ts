import { useState } from 'react';
import { BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';
import { DEFAULT_FILTERS } from '@/lib/constants/filters';

const useBookClubList = () => {
  const [filters, setFilters] = useState<BookClubParams>(DEFAULT_FILTERS);

  const { data, isLoading, error } = useQuery({
    ...bookClubs.list(filters),
  });

  const clubList = data?.bookClubs;

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
