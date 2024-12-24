'use client';

import { HeaderSection, ClubListSection } from '@/features/bookclub/components';
import useBookClubList from '../hooks/useFetchBookClubList';
import FilterBar from '@/components/common-layout/FilterBar';

function BookClubMainPage() {
  // 커스텀 훅에서 상태와 핸들러 가져오기
  const { bookClubs, setBookClubs, filters, updateFilters } = useBookClubList();

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  return (
    <>
      <HeaderSection />
      <FilterBar
        filters={filters}
        handleFilterChange={handleFilterChange}
        bookClubs={bookClubs}
        setBookClubs={setBookClubs}
      />
      <ClubListSection bookClubs={bookClubs} />
    </>
  );
}

export default BookClubMainPage;
