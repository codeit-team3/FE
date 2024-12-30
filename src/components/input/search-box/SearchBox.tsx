import { ChangeEvent } from 'react';
import Input from '../Input';
import SearchIcon from '../../../../public/icons/SearchIcon';

interface SearchBoxProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <Input
      value={value}
      onChange={onChange}
      placeholder={'검색어를 입력해주세요'}
      icon={<SearchIcon />}
    />
  );
}

export default SearchBox;
