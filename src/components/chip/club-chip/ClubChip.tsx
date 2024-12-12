import Chip from '../Chip';
import { twMerge } from 'tailwind-merge';

type ClubChipVariant = 'completed' | 'scheduled' | 'pending' | 'confirmed';

const CLUB_CHIP_TEXT = {
  completed: '참여완료',
  scheduled: '참여예정',
  pending: '개설대기',
  confirmed: '개설확정',
} as const;

interface ClubChipProps {
  variant: ClubChipVariant;
  className?: string;
}

function ClubChip({ variant, className }: ClubChipProps) {
  const getChipVariant = () => {
    switch (variant) {
      case 'completed':
        return 'square-filled';
      case 'scheduled':
        return 'square-filled';
      case 'pending':
        return 'square-outlined';
      case 'confirmed':
        return 'square-filled';
    }
  };

  const getCustomClassName = () => {
    switch (variant) {
      case 'completed':
        return 'bg-gray-normal-01 text-gray-dark-02';
      case 'scheduled':
        return 'bg-green-normal-01 text-gray-white';
      case 'pending':
        return 'border-blue-normal-01 text-blue-normal-01';
      case 'confirmed':
        return 'bg-blue-normal-01 text-gray-white';
    }
  };

  return (
    <Chip
      text={CLUB_CHIP_TEXT[variant]}
      variant={getChipVariant()}
      className={twMerge(getCustomClassName(), className)}
    />
  );
}

export default ClubChip;
