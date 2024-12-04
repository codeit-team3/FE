import { useState } from 'react';
import IcSorting from '../../../public/icons/IcSorting';
import IcFiltering from '../../../public/icons/IcFiltering';
import Image from 'next/image';

interface DropDownProps {
  variant: 'navbar' | 'filtering' | 'sorting';
  items: Array<string>;
  size?: 'large' | 'small';
  color?: 'orange-100' | 'gray-50' | 'gray-100' | 'gray-900';
  label?: string;
  imgSrc?: string;
}

const JUSTIFIY_ITEMS = {
  navbar: `justify-items-end`,
  filtering: `justify-items-start`,
  sorting: `justify-items-end`,
} as const;

const SIZES = {
  small: `w-[36px] h-[36px] px-[6px] py-[6px] justify-center`,
  large: `h-[40px] px-[12px] py-[6px] justify-start`,
} as const;

const LABEL_MARGIN = {
  filtering: `mr-[4px]`,
  sorting: `ml-[4px]`,
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
  size,
  color = 'gray-900',
  label,
  imgSrc,
}: DropDownProps) {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={`${JUSTIFIY_ITEMS[variant]} flex-col`}>
      {variant === 'navbar' ? (
        <button
          className="relative h-[40px] w-[40px] justify-center"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {/* 프로필 이미지가 들어갈 부분 */}
          <Image
            src={imgSrc || '/images/profile.png'}
            alt={'nav_profile'}
            layout="fill"
            className="rounded-full object-cover"
          />
        </button>
      ) : (
        <button
          className={`${size && SIZES[size]} flex items-center justify-between rounded-xl ${isActive ? COLORS[color].background.concat(' ', 'text-white') : 'border-2 border-gray-100 bg-white'.concat(' ', COLORS[color].text)}`}
        >
          {variant === 'sorting' && <IcSorting isActive={isActive} />}
          {size === 'large' && (
            <span className={`${LABEL_MARGIN[variant]}`}>{label}</span>
          )}
          {variant === 'filtering' && <IcFiltering isActive={isActive} />}
        </button>
      )}
      <ul className="pt-[8px] shadow-[0px_10px_10px_-5px_#0000000A]">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex h-[40px] w-[110px] items-center justify-center bg-white px-[4px] py-[4px] first:rounded-t-xl last:rounded-b-xl`}
          >
            <div
              className={`flex h-[32px] w-[102px] items-center justify-start rounded-xl px-[8px] py-[6px] hover:bg-orange-100`}
            >
              {item}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDown;
