'use client';

import { FilterBar, HeaderSection } from '@/components/common-layout';
import ClubWishList from './ClubWishList';
import { filters } from '../mocks/wishPageMockData';
import { mockBookClubs } from '@/mocks/mockDatas';

function WishPage() {
  return (
    <>
      <HeaderSection
        title={
          <>
            찜한 모임을 마감되기 전에
            <br />
            참여해 보세요!
          </>
        }
      />

      <FilterBar
        filters={filters}
        handleFilterChange={() => {}}
        bookClubs={mockBookClubs}
        setBookClubs={() => {}}
      />
      <ClubWishList bookClubs={mockBookClubs} />
    </>
  );
}

export default WishPage;
