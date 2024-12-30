import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
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
  onChangeSelection: (selectedLabel: string | undefined) => void;
  imgSrc?: string;
}

const widthClass = {
  navbar: 'w-[36px]',
  onOff: 'w-[110.27px]',
  memberCount: 'w-[100.54px]',
  sortingReview: 'w-[104.53px]',
};

function DropDown({ variant, imgSrc, onChangeSelection }: DropDownProps) {
  const [isActive, setIsActive] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isClient, setIsClient] = useState(false);

  const items = MENU_ITEMS[variant];
  const [selectedItem, setSelectedItem] = useState<MenuItem>(
    DROPDOWN_LABELS[variant],
  );

  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 10,
        left:
          variant === 'navbar'
            ? rect.left + window.scrollX - 52
            : rect.left + window.scrollX,
      });
    }
  };

  useEffect(() => {
    setIsClient(true);
    updateDropdownPosition();
    window.addEventListener('resize', updateDropdownPosition);

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
    };
  }, [isActive, variant]);

  const onChange = (item: MenuItem) => {
    setIsActive(true);
    setSelectedItem(item);
    if (onChangeSelection) {
      onChangeSelection(item.value);
    }
  };

  const renderButton = (
    variant: 'navbar' | 'onOff' | 'memberCount' | 'sortingReview',
  ) => {
    const colorClass = isActive
      ? 'border-green-normal-01 text-green-normal-01'
      : 'border-gray-normal-02 text-gray-dark-02';

    switch (variant) {
      case 'navbar':
        return (
          <ListboxButton
            ref={buttonRef}
            className="h-[36px] w-[36px] justify-center"
          >
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
            ref={buttonRef}
            className={`flex h-[40px] items-center justify-start py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass} ${widthClass[variant]}`}
          >
            {selectedItem.label}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </ListboxButton>
        );
      default:
        return (
          <ListboxButton
            ref={buttonRef}
            className={`box-border flex h-[40px] items-center justify-between rounded-xl border py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass} ${widthClass[variant]}`}
          >
            {selectedItem.label}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </ListboxButton>
        );
    }
  };

  return (
    <div className={`relative z-50 flex w-max min-w-max`}>
      <Listbox value={selectedItem} onChange={onChange}>
        {renderButton(variant)}
        {isClient &&
          ReactDOM.createPortal(
            <ListboxOptions
              className={`absolute z-50 min-w-max rounded-xl shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)] ${widthClass[variant]}`}
              style={{
                top: dropdownPosition.top,
                left: dropdownPosition.left,
              }}
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
            </ListboxOptions>,
            document.body,
          )}
      </Listbox>
    </div>
  );
}

export default DropDown;
