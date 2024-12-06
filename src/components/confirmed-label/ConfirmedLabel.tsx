import { IcCheck } from '../../../public/icons';

const LABEL_VARIANTS = {
  confirmed: 'confirmed',
  closed: 'closed',
} as const;

type LabelVariant = (typeof LABEL_VARIANTS)[keyof typeof LABEL_VARIANTS];

interface ConfirmedLabelProps extends React.ComponentPropsWithoutRef<'div'> {
  visible?: boolean;
  variant?: LabelVariant;
  isPast?: boolean;
}

function ConfirmedLabel({
  visible = true,
  variant = LABEL_VARIANTS.confirmed,
  isPast = false,
  className,
  ...props
}: ConfirmedLabelProps) {
  if (!visible) return null;

  const text = variant === LABEL_VARIANTS.confirmed ? '개설확정' : '모집마감';
  const colorClass = isPast
    ? 'text-gray-darker'
    : variant === LABEL_VARIANTS.confirmed
      ? 'text-green-normal'
      : 'text-[#007aff]'; // TODO: 포인트 컬러 수정될 수 있음

  return (
    <div className={`flex items-center gap-0.5 ${className || ''}`} {...props}>
      <IcCheck
        role="confirmed-icon"
        aria-label={`${text} 아이콘`}
        className={colorClass}
        width={20}
        height={20}
      />
      <span
        role="confirmed-text"
        aria-label={`${text} 텍스트`}
        className={`text-sm font-semibold ${colorClass}`}
      >
        {text}
      </span>
    </div>
  );
}

export default ConfirmedLabel;
