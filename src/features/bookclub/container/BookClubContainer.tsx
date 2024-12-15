// 'use client';

// import React, { useState } from 'react';
// import { useFetchBookClubList } from '../hooks/useFetchBookClubList';
// import CategoryTabs from '../components/CategoryTabs';
// import { FilterSection } from '../components';

// function BookClubMainPage() {
//   const { bookClubList, isLoading } = useFetchBookClubList();

//   // const [selectedOnOff, setSelectedOnOff] = useState<string | undefined>(
//   //   undefined,
//   // );

//   const [selectedSorting, setSelectedSorting] = useState<string | undefined>(
//     undefined,
//   );
//   const [selectedTab, setSelectedTab] = useState('전체'); // 탭
//   const [searchValue, setSearchValue] = useState(''); // 검색
//   const [selectedMeetingType, setSelectedMeetingType] = useState('ALL'); // 온/오프라인인
//   const [selectedMemberCount, setSelectedMemberCount] = useState<
//     string | undefined
//   >(undefined);
//   const [showAvailableOnly, setShowAvailableOnly] = useState(false); // 신청가능

//   // 필요한 데이터 가공
//   const categoryData = Array.from(
//     new Set(bookClubList.map((club) => club.meetingType)) // 중복 제거
//   );

//   const filteredData = bookClubList.filter((club) => {
//     const matchesTab = selectedTab === '전체' || club.meetingType === selectedTab;
//     const matchesSearch = club.title.includes(searchValue);
//     return matchesTab && matchesSearch;
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <CategoryTabs
//         selectedTab={selectedTab}
//         setSelectedTab={setSelectedTab}
//         categoryData={categoryData} // 카테고리 데이터 전달
//       />
//       <FilterSection
//         searchValue={searchValue}
//         setSearchValue={setSearchValue}
//         selectedMeetingType={selectedMeetingType}
//         setSelectedMeetingType={setSelectedMeetingType}
//         // filterData={filteredData} // 필터링된 데이터 전달
//       />
//     </div>
//   );
// }

// export default BookClubMainPage;
