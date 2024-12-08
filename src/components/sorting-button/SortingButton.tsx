import { useState } from 'react';
import { IcSorting } from '../../../public/icons/index';

interface SortingButtonProps {
  variant: 'byDeadline' | 'byDate';
}

function SortingButton({ variant }: SortingButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const onClickSorting = (): void => {
    setIsActive(!isActive);
  };

  const getLabel = (variant: string) => {
    switch (variant) {
      case 'byDeadline':
        return '마감임박순';

      case 'byDate':
        return isActive ? '오래된순' : '최신순';
    }
  };
  return (
    <button
      className={`flex h-[40px] items-center rounded-xl border px-[12px] py-[8px] text-sm ${
        isActive
          ? 'border-green-normal text-green-normal'
          : 'border-gray-dark-hover text-gray-dark-hover'
      }`}
      onClick={onClickSorting}
    >
      <span className="pr-[4px]">
        <IcSorting isActive={isActive} color="stroke-green-normal" />
      </span>
      {getLabel(variant)}
    </button>
  );
}

export default SortingButton;
