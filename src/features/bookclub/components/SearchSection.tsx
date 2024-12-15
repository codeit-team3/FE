import SearchBox from '@/components/search-box/SearchBox';
import { useState } from 'react';

function SearchSection() {
  const [searchValue, setSearchValue] = useState(''); // 검색

  return (
    <div className="bg-white">
      <SearchBox
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        aria-label="책 검색"
      />
    </div>
  );
}
export default SearchSection;
