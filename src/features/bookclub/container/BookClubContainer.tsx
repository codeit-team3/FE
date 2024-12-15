import React from 'react';
import useBookClubList from '../hooks/useFetchBookClubList';
import { BookClubMainPage } from '../components';

const BookClubContainer = () => {
  // 커스텀 훅에서 상태와 핸들러 가져오기
  const { bookClubs, loading, filters, updateFilters } = useBookClubList();

  // 필터 변경 핸들러
  // Partial: 속성을 필수에서 선택으로 변환
  // 예시)
  // type PartialFilters = {
  //   searchKeyword?: string;
  //   bookClubType?: string;
  //   meetingType?: string;
  //   order?: string;
  // };
  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  // 페이지네이션 핸들러
  // const handlePageChange = (page: number) => {
  //   goToPage(page);
  // };

  return (
    <BookClubMainPage
      bookClubs={bookClubs} // 필터링된 책 모임 데이터
      loading={loading} // 로딩 상태
      // error={error}               // 에러 상태
      filters={filters} // 현재 필터 상태
      onFilterChange={handleFilterChange} // 필터 변경 이벤트
      // onPageChange={handlePageChange}     // 페이지네이션 이벤트
    />
  );
};

export default BookClubContainer;
