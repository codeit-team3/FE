import { useState } from 'react';
import IcSorting from '../../../public/icons/IcSorting';

interface DropDownProps {
  variant: 'navbar' | 'find' | 'profile' | 'review';
  size: 'navbar' | 'large' | 'small';
  color?: 'orange-100' | 'gray-50' | 'gray-100' | 'gray-900';
  label?: string;
}

const VARIANTS = {
  navbar: ['마이페이지', '로그아웃'],
  find: ['마감임박 순', '모임임박 순'],
  profile: ['최신순', '오래된 순'],
  review: ['평점 높은 순', '평점 낮은 순'],
} as const;

const SIZE = {
  navbar: `w-[40px] h-[40px] justify-center `,
  small: `w-[36px] h-[36px] px-[6px] py-[6px] justify-center`,
  large: `h-[40px] px-[12px] py-[6px] justify-start`,
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

function DropDown({ variant, size, color = 'gray-900' }: DropDownProps) {
  const itemList = VARIANTS[variant];
  const label = itemList[0];
  const [isActive, setIsActive] = useState(true);

  return (
    <div className={`h-[40px] flex-col justify-items-end`}>
      {variant === 'navbar' ? (
        <button
          className={`${SIZE[size]} flex items-center rounded-full bg-white`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        ></button>
      ) : (
        <button
          className={`${SIZE[size]} flex items-center rounded-xl ${isActive ? COLORS[color].background.concat(' ', 'text-white') : 'border-2 border-gray-100 bg-white'.concat(' ', COLORS[color].text)}`}
        >
          <IcSorting isActive={isActive} />
          {size === 'large' && <span className="ml-[4px]">{label}</span>}
        </button>
      )}
      <ul className="pt-[8px] shadow-[0px_10px_10px_-5px_#0000000A]">
        {itemList.map((item, index) => (
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
