import { useState, useEffect } from 'react';
import { getBookClubs } from '../api/bookclubApi';
import { BookClubParams } from '../types/bookclubs';

const useBookClubList = () => {
  // 상태 관리
  const [bookClubs, setBookClubs] = useState([]); // 책 모임 목록 데이터
  const [loading, setLoading] = useState(false); // 로딩 상태
  const [error, setError] = useState<Error | null>(null); // 에러 상태
  const [filters, setFilters] = useState<BookClubParams>({
    bookClubType: '전체',
    meetingType: 'ALL',
    order: 'DESC',
    page: 1,
    size: 10,
    searchKeyword: '',
  });

  // 데이터 가져오는 함수
  const fetchData = async () => {
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
  };

  // 필터나 검색어가 변경될 때마다 데이터 요청
  useEffect(() => {
    fetchData();
  }, [filters]);

  // 필터 상태 업데이트 함수
  const updateFilters = (newFilters: Partial<BookClubParams>) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  // 페이지네이션 함수
  const goToPage = (pageNumber: number) => {
    setFilters((prevFilters) => ({ ...prevFilters, page: pageNumber }));
  };

  return {
    bookClubs,
    loading,
    error,
    filters,
    updateFilters,
    goToPage,
  };
};

export default useBookClubList;
