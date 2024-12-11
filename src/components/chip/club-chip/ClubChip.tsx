import Chip from '../Chip';
import { twMerge } from 'tailwind-merge';

type ClubChipVariant = 'completed' | 'scheduled' | 'pending' | 'confirmed';

interface ClubChipProps {
  text: string;
  variant: ClubChipVariant;
  className?: string;
}

function ClubChip({ text, variant, className }: ClubChipProps) {
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
      text={text}
      variant={getChipVariant()}
      className={twMerge(getCustomClassName(), className)}
    />
  );
}

export default ClubChip;
