import React, { useState } from 'react';
import { IcDropDown } from '../../../public/icons';
import Avatar from '../avatar/Avatar';
import { DROPDOWN_LABELS, MENU_ITEMS, MenuItem } from '@/constants/index';
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

interface DropDownProps {
  variant: 'navbar' | 'onOff' | 'memberCount' | 'sortingReview';
  imgSrc?: string;
}

function DropDown({ variant, imgSrc }: DropDownProps) {
  const [isActive, setIsActive] = useState(false);
  const items = MENU_ITEMS[variant];

  const [selectedItem, setSelectedItem] = useState<MenuItem>(
    DROPDOWN_LABELS[variant],
  );

  const onChange = (item: MenuItem) => {
    setIsActive(true);
    setSelectedItem(item);
  };

  const renderButton = (variant: string) => {
    const colorClass = isActive
      ? 'border-green-normal-01 text-green-normal-01'
      : 'border-gray-normal-02 text-gray-dark-02';

    switch (variant) {
      case 'navbar':
        return (
          <ListboxButton className="relative h-[40px] w-[40px] justify-center">
            <Avatar
              src={imgSrc || '/images/profile.png'}
              alt="nav_profile"
              size="md"
            />
          </ListboxButton>
        );
      case 'sortingReview':
        return (
          <ListboxButton
            className={`flex h-[40px] items-center justify-start py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass}`}
          >
            {selectedItem.label}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </ListboxButton>
        );
      default:
        return (
          <ListboxButton
            className={`box-border flex h-[40px] items-center justify-start rounded-xl border py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass}`}
          >
            {selectedItem.label}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </ListboxButton>
        );
    }
  };

  return (
    <div
      className={`relative z-50 flex w-max min-w-max ${(variant === 'navbar' || variant == 'sortingReview') && 'justify-end'}`}
    >
      <Listbox value={selectedItem} onChange={onChange}>
        {renderButton(variant)}
        <ListboxOptions
          className={`absolute top-[50px] w-full min-w-max rounded-xl shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)]`}
        >
          {items.map((item) => (
            <ListboxOption
              className={`flex h-[40px] w-full items-center justify-start bg-gray-white px-[16px] py-[10px] text-sm font-medium text-gray-dark-01 first:rounded-t-xl last:rounded-b-xl hover:bg-gray-light-02 hover:font-semibold hover:text-gray-darker`}
              key={item.value}
              value={item}
            >
              {item.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}

export default DropDown;
