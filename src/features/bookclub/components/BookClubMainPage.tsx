'use client';

import useBookClubList from '../hooks/useFetchBookClubList';
import { FilterBar, HeaderSection } from '@/components/common-layout';
import { useAuthStore } from '@/store/authStore';
import ClubListSection from './ClubListSection';
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';
import Loading from '@/components/loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { fetchBookClubs } from '@/lib/utils/fetchBookClubs';

function BookClubMainPage() {
  const { filters, updateFilters } = useBookClubList();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['bookClubs', 'list', filters],
    queryFn: () => fetchBookClubs(filters),
    staleTime: 1000 * 30,
  });

  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const userName = user?.nickname || '북코';

  const handleFilterChange = (newFilter: Partial<typeof filters>) => {
    updateFilters(newFilter);
  };

  return (
    <>
      <HeaderSection
        title={
          <>
            반가워요, <span className="text-green-normal-01">{userName}</span>
            님!
            <br />책 모임에 참여해 보세요
          </>
        }
        actionElement={
          <Button
            className="hover-dim"
            text="모임 만들기"
            size="small"
            fillType="solid"
            themeColor="green-normal-01"
            onClick={() => router.push('/bookclub/create')}
          />
        }
      />
      <FilterBar filters={filters} handleFilterChange={handleFilterChange} />
      {isLoading || isFetching ? (
        <div className="flex h-[400px] justify-center">
          <Loading />
        </div>
      ) : (
        <ClubListSection bookClubs={data} filter={filters} />
      )}
    </>
  );
}

export default BookClubMainPage;
