import { IcCheck } from '../../../public/icons';

interface ConfirmedLabelProps {
  visible?: boolean;
}

function ConfirmedLabel({ visible = true }: ConfirmedLabelProps) {
  if (!visible) return null;

  return (
    <div className="flex items-center gap-0.5">
      <IcCheck role="confirmed-icon" aria-label="개설확정 아이콘" />
      <span
        role="confirmed-text"
        aria-label="개설확정 텍스트"
        className="text-sm font-medium text-orange-500"
      >
        개설확정
      </span>
    </div>
  );
}

export default ConfirmedLabel;
