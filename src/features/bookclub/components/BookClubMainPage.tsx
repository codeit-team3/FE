'use client';
import { Header, Main } from '@/features/bookclub/components';
import { useState } from 'react';

function BookClubMainPage() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedTab, setSelectedTab] = useState('전체');
  // const [selectedOnOff, setSelectedOnOff] = useState<string | undefined>(
  //   undefined,
  // );
  // const [selectedMemberCount, setSelectedMemberCount] = useState<
  //   string | undefined
  // >(undefined);
  // const [selectedChecking, setSelectedChecking] = useState(false);
  // const [selectedSorting, setSelectedSorting] = useState<string | undefined>(
  //   undefined,
  // );

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        // setSelectedOnOff={setSelectedOnOff}
        // setSelectedMemberCount={setSelectedMemberCount}
        // selectedChecking={selectedChecking}
        // setSelectedChecking={setSelectedChecking}
        // setSelectedSorting={setSelectedSorting}
      />
      <Main />
    </>
  );
}
export default BookClubMainPage;
