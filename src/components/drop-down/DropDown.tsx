import React, { useEffect, useRef, useState } from 'react';
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

const useDropDownClose = (
  ref: React.RefObject<HTMLElement>,
  initialState: boolean,
) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClickPage = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen((prev) => !prev);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClickPage);
    }

    return () => {
      window.removeEventListener('click', onClickPage);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen] as const;
};

function DropDown({ variant, items, label, imgSrc }: DropDownProps) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useDropDownClose(dropDownRef, false);
  const [isActive, setIsActive] = useState(false);

  const onclickDropDown = (): void => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  const renderButton = (
    variant: string,
    label: string | undefined,
    isActive: boolean,
  ) => {
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
      case 'filtering':
        return (
          <button
            className={`box-border flex h-[40px] items-center justify-start rounded-xl border py-[8px] pl-[14px] pr-[6px] text-sm font-medium ${colorClass}`}
            onClick={onclickDropDown}
          >
            {label}
            <IcDropDown isActive={isActive} color="stroke-green-normal-01" />
          </button>
        );
    }
  };

  return (
    <div
      ref={dropDownRef}
      className={`relative flex w-max min-w-max ${variant === 'navbar' && 'justify-end'}`}
    >
      {renderButton(variant, label, isActive)}

      <ul
        className={`absolute top-[50px] w-full min-w-max rounded-xl shadow-[0_10px_10px_-5px_rgba(0,0,0,0.08)] ${isOpen ? 'block' : 'hidden'}`}
      >
        {items.map((item) => (
          <li
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
