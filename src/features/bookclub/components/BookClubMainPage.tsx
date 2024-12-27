'use client';

import useBookClubList from '../hooks/useFetchBookClubList';
import { FilterBar, HeaderSection } from '@/components/common-layout';
import { useAuthStore } from '@/store/authStore';
import ClubListSection from './ClubListSection';

function BookClubMainPage() {
  // 커스텀 훅에서 상태와 핸들러 가져오기
  const { bookClubs, setBookClubs, filters, updateFilters } = useBookClubList();

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  const user = useAuthStore((state) => state.user);

  const userName = user?.nickname || '북코';

  return (
    <>
      <HeaderSection showButton={true}>
        반가워요, <span className="text-green-normal-01">{userName}</span>님!
        <br />책 모임에 참여해 보세요
      </HeaderSection>
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
