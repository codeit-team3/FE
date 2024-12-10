import { useState } from 'react';
import { IcSorting } from '../../../public/icons/index';

interface SortingButtonProps {
  variant: 'byDeadline' | 'byDate';
  onClickSorting: (sortBy: string) => void;
}

function SortingButton({ variant, onClickSorting }: SortingButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const onClick = (): void => {
    let param;
    switch (variant) {
      case 'byDeadline':
        param = isActive ? 'NEWEST' : 'DEADLINE';
        break;

      case 'byDate':
        param = isActive ? 'NEWEST' : 'OLDEST';
        break;
    }
    onClickSorting(param);
    setIsActive(!isActive);
  };

  const renderLabel = (variant: string) => {
    switch (variant) {
      case 'byDeadline':
        return '마감임박순';

      case 'byDate':
        return isActive ? '오래된순' : '최신순';
    }
  };
  return (
    <button
      className={`flex h-[40px] items-center rounded-xl border px-[12px] py-[8px] text-sm font-medium ${
        isActive
          ? 'border-green-normal-01 text-green-normal-01'
          : 'border-gray-normal-02 text-gray-dark-02'
      }`}
      onClick={onClick}
    >
      <span className="pr-[4px]">
        <IcSorting isActive={isActive} color="stroke-green-normal-02" />
      </span>
      {renderLabel(variant)}
    </button>
  );
}

export default SortingButton;
