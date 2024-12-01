import PopUpButton from '../pop-up-button/PopUpButton';
import IcClose from '../../../public/icons/IcClose';
// import { MouseEvent, useState } from 'react';

interface PopUpProps {
  isOpen: boolean;
  // width?: number;
  // height?: number;
  isLarge: boolean;
  isTwoButton: boolean;
  label: string;
  // onClickClose: (
  //   event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>,
  // ) => void;
  // onClickConfirm: (
  //   event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLDivElement>,
  // ) => void;
}

function PopUp({
  isOpen,
  isLarge,
  isTwoButton,
  label,
  // onClickClose,
  // onClickConfirm,
}: PopUpProps) {
  return (
    <>
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div
          className={`fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-50`}
        >
          <div
            role="pop-up"
            className={`absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center justify-between rounded-lg border opacity-100 ${isLarge ? 'h-[212px] w-[450px]' : 'h-[199px] w-[300px]'} bg-white p-[24px]`}
          >
            <button className="ml-auto">
              <IcClose role="close-icon" className="ml-auto" />
            </button>
            <div className="flex flex-col items-center whitespace-pre-wrap text-center text-[#111827]">
              {label}
            </div>
            <div
              className={`${isLarge && !isTwoButton ? 'ml-auto' : 'flex items-center'} `}
            >
              {isTwoButton ? <PopUpButton isConfirm={false} /> : null}
              <PopUpButton isConfirm={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
