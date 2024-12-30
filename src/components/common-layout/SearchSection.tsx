import SearchInput from '@/components/input/search-input/SearchInput';

function SearchSection({
  searchValue,
  onSearchChange,
}: {
  searchValue: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="bg-white">
      <SearchInput
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="책 검색"
      />
    </div>
  );
}
export default SearchSection;
