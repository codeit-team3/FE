import React, { useRef, useState } from 'react';
import { IcDropDown } from '../../../public/icons';
import Avatar from '../avatar/Avatar';
import useDropDownClose from './hooks/useDropDownClose';
import { MENU_ITEMS, DROPDOWN_LABELS } from '@/constants/index';

interface DropDownProps {
  variant: 'navbar' | 'onOff' | 'memberCount' | 'sortingReview';
  onChangeSelection: (selectedLabel: string | undefined) => void;
  imgSrc?: string;
}

interface DropDownItem {
  label: string;
  value: string;
}

function DropDown({ variant, imgSrc, onChangeSelection }: DropDownProps) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDownClose(dropDownRef, false);
  const [isActive, setIsActive] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string>(
    DROPDOWN_LABELS[variant],
  );

  const items = MENU_ITEMS[variant];

  const onClickDropDownItem = (item: DropDownItem): void => {
    setIsActive(true);
    setSelectedLabel(item.label);

    if (onChangeSelection) {
      onChangeSelection(item.value);
    }
    setIsOpen(false);
  };

  const renderButton = (variant: string, isActive: boolean) => {
    const colorClass = isActive
      ? 'border-green-normal-01 text-green-normal-01'
      : 'border-gray-normal-02 text-gray-dark-02';

    switch (variant) {
      case 'navbar':
        return (
          <button
            className="relative h-[40px] w-[40px] justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Avatar
              src={imgSrc || '/images/profile.png'}
              alt="nav_profile"
              size="md"
            />
          </button>
        );
      case 'sortingReview':
        return (
          <button
            className={`flex h-[40px] items-center justify-start py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLabel}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </button>
        );
      default:
        return (
          <button
            className={`box-border flex h-[40px] items-center justify-start rounded-xl border py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedLabel}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </button>
        );
    }
  };

  return (
    <div
      ref={dropDownRef}
      className={`relative z-50 flex w-max min-w-max ${(variant === 'navbar' || variant == 'sortingReview') && 'justify-end'}`}
    >
      {renderButton(variant, isActive)}

      <ul
        className={`absolute top-[50px] w-full min-w-max rounded-xl shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)] ${isOpen ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <li
            onClick={() => onClickDropDownItem(item)}
            key={item.value}
            className={`flex h-[40px] w-full items-center justify-start bg-gray-white px-[16px] py-[10px] text-sm font-medium text-gray-dark-01 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-light-02 hover:font-semibold hover:text-gray-darker`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
