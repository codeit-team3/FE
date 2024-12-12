import Chip from '../Chip';
import { twMerge } from 'tailwind-merge';

type ClubChipVariant =
  | 'completed'
  | 'scheduled'
  | 'pending'
  | 'confirmed'
  | 'closed';

const CLUB_CHIP_TEXT = {
  completed: '참여완료',
  scheduled: '참여예정',
  pending: '개설대기',
  confirmed: '개설확정',
  closed: '모집마감',
} as const;

const CLUB_CHIP_VARIANT = {
  completed: 'square-filled',
  scheduled: 'square-filled',
  pending: 'square-outlined',
  confirmed: 'square-filled',
  closed: 'square-filled',
} as const;

const CLUB_CHIP_STYLE = {
  completed: 'bg-gray-normal-01 text-gray-dark-02',
  scheduled: 'bg-green-light-03 text-green-dark-01',
  pending: 'border-blue-light-active text-blue-light-active',
  confirmed: 'bg-blue-light text-blue-light-active',
  closed: 'bg-blue-normal text-gray-white',
} as const;

interface ClubChipProps {
  variant: ClubChipVariant;
  className?: string;
}

function ClubChip({ variant, className }: ClubChipProps) {
  return (
    <Chip
      text={CLUB_CHIP_TEXT[variant]}
      variant={CLUB_CHIP_VARIANT[variant]}
      className={twMerge(CLUB_CHIP_STYLE[variant], className)}
    />
  );
}

export default ClubChip;
