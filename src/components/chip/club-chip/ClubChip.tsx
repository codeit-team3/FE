import Chip from '../Chip';
import { twMerge } from 'tailwind-merge';

type ClubChipVariant =
  | 'completed'
  | 'scheduled'
  | 'pending'
  | 'confirmed'
  | 'closed'
  | 'FREE'
  | 'FIXED';

const CLUB_CHIP_TEXT = {
  completed: '참여완료',
  scheduled: '참여예정',
  pending: '개설대기',
  confirmed: '개설확정',
  closed: '모집마감',
  FREE: '자유책',
  FIXED: '지정책',
} as const;

const CLUB_CHIP_VARIANT = {
  completed: 'square-filled',
  scheduled: 'square-filled',
  pending: 'square-outlined',
  confirmed: 'square-filled',
  closed: 'square-filled',
  FREE: 'rounded-filled',
  FIXED: 'rounded-light',
} as const;

const CLUB_CHIP_STYLE = {
  completed: 'bg-gray-normal-01 text-gray-dark-02',
  scheduled: 'bg-green-light-03 text-green-dark-01',
  pending: 'border-blue-light-active text-blue-light-active',
  confirmed: 'bg-blue-light text-blue-light-active',
  closed: 'bg-blue-normal text-gray-white',
  FREE: '',
  FIXED: '',
} as const;

const PAST_STATUS_STYLE = 'bg-gray-dark-02 text-gray-white';
const PAST_BOOK_TYPE_STYLE = 'bg-gray-normal-01 text-gray-dark-02';

interface ClubChipProps {
  variant: ClubChipVariant;
  className?: string;
  isPast?: boolean;
}

function ClubChip({ variant, className, isPast = false }: ClubChipProps) {
  const style = isPast
    ? ['FREE', 'FIXED'].includes(variant)
      ? PAST_BOOK_TYPE_STYLE
      : PAST_STATUS_STYLE
    : CLUB_CHIP_STYLE[variant];

  return (
    <Chip
      text={CLUB_CHIP_TEXT[variant]}
      variant={CLUB_CHIP_VARIANT[variant]}
      className={twMerge(style, className)}
    />
  );
}

export default ClubChip;
