import { IcClose } from '../../../public/icons';
import Button from '../button/Button';

interface PopUpProps {
  isOpen: boolean;
  label: string;
  handlePopUpClose: (result: boolean) => void;
  handlePopUpConfirm: (result: boolean) => void;
  isLarge?: boolean;
  isTwoButton?: boolean;
}

function PopUp({
  isOpen,
  isLarge = false,
  isTwoButton = false,
  label,
  handlePopUpClose,
  handlePopUpConfirm,
}: PopUpProps) {
  const onClickClose = () => {
    if (handlePopUpClose) {
      handlePopUpClose(false);
    }
  };

  const onClickConfirm = () => {
    if (handlePopUpConfirm) {
      handlePopUpConfirm(true);
    }
  };
  return (
    <>
      <div className={`${isOpen ? 'block' : 'hidden'} `}>
        <div
          className={`fixed left-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-50`}
        >
          <div
            role="pop-up"
            className={`z-60 absolute left-2/4 top-2/4 flex -translate-x-2/4 -translate-y-2/4 flex-col items-center justify-between rounded-lg border opacity-100 ${isLarge ? 'h-[212px] w-[450px]' : 'h-[199px] w-[300px]'} bg-white p-[24px]`}
          >
            <button className="ml-auto" onClick={onClickClose}>
              <IcClose role="close-icon" className="ml-auto" />
            </button>
            <div className="flex flex-col items-center whitespace-pre-wrap text-center text-[#111827]">
              {label}
            </div>
            <div
              className={`${isLarge && !isTwoButton ? 'ml-auto' : 'flex items-center gap-2'} `}
            >
              {isTwoButton ? (
                <Button
                  text="취소"
                  size="modal"
                  fillType="outline"
                  themeColor="green-normal-01"
                  onClick={onClickClose}
                />
              ) : null}
              <Button
                text="확인"
                size="modal"
                fillType="solid"
                themeColor="green-normal-01"
                onClick={onClickConfirm}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopUp;
