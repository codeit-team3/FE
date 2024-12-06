import { useState } from 'react';
import { IcDropDown } from '../../../public/icons';
import Image from 'next/image';

interface DropDownProps {
  variant: 'navbar' | 'filtering';
  items: Array<DropDownItem>;
  color?: 'orange-100' | 'gray-50' | 'gray-100' | 'gray-900';
  label?: string;
  imgSrc?: string;
}

interface DropDownItem {
  value: number;
  label: string;
}

const JUSTIFIY_ITEMS = {
  navbar: `justify-items-end`,
  filtering: `justify-items-start`,
} as const;

const COLORS = {
  'orange-100': {
    background: `bg-orange-100`,
    text: `text-orange-100`,
    border: `border-orange-100`,
  },
  'gray-50': {
    background: `bg-gray-50`,
    text: `text-gray-50`,
    border: `border-gray-50`,
  },
  'gray-100': {
    background: `bg-gray-100`,
    text: `text-gray-100`,
    border: `border-gray-100`,
  },
  'gray-900': {
    background: 'bg-gray-900',
    text: `text-gray-900`,
    border: `border-gray-900`,
  },
} as const;

function DropDown({
  variant,
  items,
  color = 'gray-900',
  label,
  imgSrc,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleDropDown = (): void => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const getButtonClassName = (
    { variant, color }: Partial<DropDownProps>,
    isActive: boolean,
  ) => {
    const baseClass = `flex items-center justify-between rounded-xl`;
    const colorClass = isActive
      ? color && COLORS[color].background + ' text-white'
      : color && COLORS[color].text + 'border-2 border-gray-100 bg-white';

    switch (variant) {
      case 'navbar':
        return `relative h-[40px] w-[40px] justify-center`;

      default:
        return `${baseClass} ${colorClass} h-[40px] pl-[14px] pr-[6px] py-[8px] justify-start`;
    }
  };

  const getButtonChild = (variant: string, label: string | undefined) => {
    switch (variant) {
      case 'navbar':
        return (
          <Image
            src={imgSrc || '/images/profile.png'}
            alt={'nav_profile'}
            layout="fill"
            className="rounded-full object-cover"
          />
        );
      case 'filtering':
        return (
          <>
            <span className={`${'mr-[4px] block'}`}>{label}</span>
            <IcDropDown isActive={isActive} />
          </>
        );
    }
  };

  return (
    <div className={`${JUSTIFIY_ITEMS[variant]} flex-col`}>
      <button
        className={`${getButtonClassName({ variant, color }, isActive)}`}
        onClick={handleDropDown}
      >
        {getButtonChild(variant, label)}
      </button>

      <ul
        className={`pt-[8px] shadow-[0px_10px_10px_-5px_#0000000A] ${isOpen ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <li
            key={item.value}
            className={`flex h-[40px] w-[110px] items-center justify-center bg-white px-[4px] py-[4px] first:rounded-t-xl last:rounded-b-xl`}
          >
            <div
              className={`flex h-[32px] w-[102px] items-center justify-start rounded-xl px-[8px] py-[6px] hover:bg-orange-100`}
            >
              {item.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
