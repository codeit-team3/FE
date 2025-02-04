import { useState } from 'react';
import { BookClubParams } from '@/types/bookclubs';
import { DEFAULT_FILTERS } from '@/constants/filters';

const useBookClubList = () => {
  const [filters, setFilters] = useState<BookClubParams>(DEFAULT_FILTERS);

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return {
    filters,
    updateFilters,
  };
};

export default useBookClubList;
