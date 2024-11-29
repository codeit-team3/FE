const THEME_COLOR = {
  cancel: 'border border-orange-600 bg-white text-orange-600 mr-[8px]',
  confirm: 'bg-orange-600 text-white',
};

interface PopUpButtonProps {
  isConfirm: boolean;
}

function PopUpButton({ isConfirm }: PopUpButtonProps) {
  return (
    <button
      className={`h-[44px] w-[120px] rounded-xl ${isConfirm ? THEME_COLOR.confirm : THEME_COLOR.cancel}`}
    >
      {isConfirm ? '확인' : '취소'}
    </button>
  );
}

export default PopUpButton;
