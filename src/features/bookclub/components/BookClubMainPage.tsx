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
import { useEffect, useState } from 'react';
import ErrorHandlingWrapper from '@/components/error/ErrorHandlingWrapper';
import ErrorFallback from '@/components/error/ErrorFallback';

function BookClubMainPage() {
  const { filters, updateFilters } = useBookClubList();
  const { data, isLoading } = useQuery({
    queryKey: ['bookClubs', 'list', filters],
    queryFn: () => fetchBookClubs(filters),
  });
  // console.log('클라이언트 데이터:', data); // 클라이언트의 데이터 확인

  const [isHydrated, setIsHydrated] = useState(false);
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const userName = user?.nickname || '북코';

  useEffect(() => {
    setIsHydrated(true);
  }, []);

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

      {isLoading || !isHydrated ? (
        <div className="flex h-[400px] justify-center">
          <Loading />
        </div>
      ) : (
        <ErrorHandlingWrapper
          fallbackComponent={ErrorFallback}
          suspenseFallback={<Loading />}
        >
          <div className="pb-12">
            <ClubListSection bookClubs={data} filter={filters} />
          </div>
        </ErrorHandlingWrapper>
      )}
    </>
  );
}

export default BookClubMainPage;
