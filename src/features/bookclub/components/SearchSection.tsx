import SearchBox from '@/components/search-box/SearchBox';

function SearchSection({
  searchValue,
  onSearchChange,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="bg-white">
      <SearchBox
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="책 검색"
      />
    </div>
  );
}
export default SearchSection;
