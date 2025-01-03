import { useState, useEffect } from 'react';
import { BookClub, BookClubParams } from '@/types/bookclubs';
import { useQuery } from '@tanstack/react-query';
import { bookClubs } from '@/api/book-club/react-query';

const useBookClubList = () => {
  // TODO: 신청 가능 필터 param 추가시 clubList, initialBookClubs 상태 관리x
  const [clubList, setClubList] = useState<BookClub[]>([]);
  const [initialBookClubs, setInitialBookClubs] = useState<BookClub[]>([]);
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

  const clubInfo = data?.bookClubs;

  // TODO: param 추가시, useEffect 대신 clubInfo 직접 사용
  useEffect(() => {
    if (clubInfo) {
      setClubList(clubInfo);
      setInitialBookClubs(clubInfo); // 초기 데이터 설정
    }
  }, [clubInfo]);

  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  return {
    clubList,
    initialBookClubs,
    setClubList,
    isLoading,
    error,
    filters,
    updateFilters,
  };
};

export default useBookClubList;
