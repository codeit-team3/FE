import { useState } from 'react';
import { IcDropDown } from '../../../public/icons';
import Avatar from '../avatar/Avatar';

interface DropDownProps {
  variant: 'navbar' | 'filtering';
  items: Array<DropDownItem>;
  label?: string;
  imgSrc?: string;
}

interface DropDownItem {
  label: string;
  value: number;
}

function DropDown({ variant, items, label, imgSrc }: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleDropDown = (): void => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const getButton = (
    variant: string,
    label: string | undefined,
    isActive: boolean,
  ) => {
    const colorClass = isActive
      ? 'border-green-normal text-green-normal'
      : 'border-gray-dark-hover text-gray-dark-hover';

    switch (variant) {
      case 'navbar':
        return (
          <button
            className="relative h-[40px] w-[40px] justify-center"
            onClick={handleDropDown}
          >
            <Avatar
              src={imgSrc || '/images/profile.png'}
              alt="nav_profile"
              size="md"
            />
          </button>
        );
      case 'filtering':
        return (
          <button
            className={`box-border flex h-[40px] items-center justify-start rounded-xl border py-[8px] pl-[14px] pr-[6px] text-sm ${colorClass}`}
            onClick={handleDropDown}
          >
            {label}
            <IcDropDown isActive={isActive} color="stroke-green-normal" />
          </button>
        );
    }
  };

  return (
    <div
      className={`relative flex w-max min-w-max ${variant === 'navbar' && 'justify-end'}`}
    >
      {getButton(variant, label, isActive)}

      <ul
        className={`absolute top-[50px] w-full min-w-max rounded-xl shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)] ${isOpen ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <li
            key={item.value}
            className={`flex h-[40px] w-full items-center justify-start bg-white px-[16px] py-[10px] text-sm text-gray-dark first:rounded-t-xl last:rounded-b-xl hover:bg-gray-light-active hover:font-semibold hover:text-gray-darker`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
