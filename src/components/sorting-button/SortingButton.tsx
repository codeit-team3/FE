import IcSorting from '../../../public/icons/IcSorting';

interface SortingButtonProps {
  label?: string;
  isActive: boolean;
  isLarge: boolean;
}
const COLOR = {
  default: 'bg-gray-50 text-gray-900',
  active: 'bg-gray-900 text-gray-50',
};
function SortingButton({ label, isActive, isLarge }: SortingButtonProps) {
  return (
    <button
      className={`flex h-[36px] w-[110px] items-center justify-between rounded-xl px-[12px] py-[6px] ${isActive ? COLOR.active : COLOR.default}`}
    >
      <span>
        <IcSorting isActive={isActive} />
      </span>
      {isLarge ? <span>{label}</span> : null}
    </button>
  );
}

export default SortingButton;
