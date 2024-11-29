import PopUpButton from '../pop-up-button/PopUpButton';

interface PopUpProps {
  isLarge: boolean;
  isSingleButton: boolean;
  label: string;
}

function PopUp({ label }: PopUpProps) {
  return (
    <div className="flex h-[212px] w-[450px] flex-col items-center justify-between rounded-lg border border-gray-900 bg-white p-[24px]">
      <button className="ml-auto">닫기</button>
      <div className="flex flex-col items-center">{label}</div>
      <div className="flex items-center">
        <PopUpButton isConfirm={false} />
        <PopUpButton isConfirm={true} />
      </div>
    </div>
  );
}

export default PopUp;
