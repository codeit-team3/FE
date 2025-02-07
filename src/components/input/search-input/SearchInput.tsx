import { ChangeEvent, useMemo, useState } from 'react';
import Input from '../Input';
import SearchIcon from '../../../../public/icons/SearchIcon';
import { debounce } from 'lodash';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ value, onChange }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value);

  const debouncedOnChange = useMemo(
    () =>
      debounce((value: string) => {
        onChange({ target: { value } } as ChangeEvent<HTMLInputElement>);
      }, 300),
    [onChange],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    debouncedOnChange(newValue);
  };

  return (
    <div className="bg-white">
      <Input
        value={inputValue}
        onChange={handleChange}
        placeholder={'검색어를 입력해주세요'}
        icon={<SearchIcon />}
      />
    </div>
  );
}

export default SearchInput;
