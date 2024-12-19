'use client';

import React from 'react';
import useBookClubList from '../hooks/useFetchBookClubList';
import { BookClubMainPage } from '../components';

const BookClubContainer = () => {
  // 커스텀 훅에서 상태와 핸들러 가져오기
  const { bookClubs, setBookClubs, loading, filters, updateFilters } =
    useBookClubList();

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  // 페이지네이션 핸들러
  // const handlePageChange = (page: number) => {
  //   goToPage(page);
  // };

  return (
    <BookClubMainPage
      bookClubs={bookClubs}
      setBookClubs={setBookClubs}
      loading={loading}
      // error={error}
      filters={filters} // 현재 필터 상태
      onFilterChange={handleFilterChange} // 필터 변경 이벤트
      // onPageChange={handlePageChange}     // 페이지네이션 이벤트
    />
  );
};

export default BookClubContainer;
