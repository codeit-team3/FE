import { ChangeEvent } from 'react';
import Input from '../Input';
import SearchIcon from '../../../../public/icons/SearchIcon';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={'검색어를 입력해주세요'}
      icon={<SearchIcon />}
    />
  );
}

export default SearchInput;
