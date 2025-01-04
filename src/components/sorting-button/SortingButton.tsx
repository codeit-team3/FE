'use client';
import React, { useState } from 'react';
import { IcSorting } from '../../../public/icons/index';
import { orderType } from '@/features/profile/types';

interface SortingButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'byDeadline' | 'byDate';
  onClickSorting: (order: orderType) => void;
}

function SortingButton({
  variant,
  onClickSorting,
  ...buttonProps
}: SortingButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const onClick = (): void => {
    let order: orderType;
    setIsActive(!isActive);
    switch (variant) {
      case 'byDeadline':
        order = isActive ? 'DESC' : 'END';
        break;

      case 'byDate':
        order = isActive ? 'DESC' : 'ASC';
        break;
    }
    onClickSorting(order);
  };

  const renderLabel = () => {
    switch (variant) {
      case 'byDeadline':
        return '마감임박';

      case 'byDate':
        return isActive ? '오래된순' : '최신순';
    }
  };

  return (
    <button
      {...buttonProps}
      className={`flex h-[40px] items-center rounded-xl border px-[12px] py-[8px] text-sm font-medium ${
        variant === 'byDeadline' && isActive
          ? 'border-green-normal-01 text-green-normal-01'
          : 'border-gray-normal-02 text-gray-dark-02'
      }`}
      onClick={onClick}
    >
      <span className="pr-[4px]">
        <IcSorting
          isActive={variant === 'byDeadline' ? isActive : false}
          color="stroke-green-normal-02"
        />
      </span>
      {renderLabel()}
    </button>
  );
}

export default SortingButton;
