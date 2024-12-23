import { useState, useEffect, useCallback } from 'react';
import { getBookClubs } from '../api/bookclubApi';
import { BookClub, BookClubParams } from '../../../types/bookclubs';

const useBookClubList = () => {
  const [bookClubs, setBookClubs] = useState<BookClub[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [filters, setFilters] = useState<BookClubParams>({
    bookClubType: 'ALL',
    meetingType: 'ALL',
    order: 'DESC',
    page: 1,
    size: 10,
    searchKeyword: '',
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getBookClubs(filters); // API 호출
      setBookClubs(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const goToPage = (pageNumber: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, page: pageNumber }));
  };

  return {
    bookClubs,
    setBookClubs,
    loading,
    error,
    filters,
    updateFilters,
    goToPage,
  };
};

export default useBookClubList;
