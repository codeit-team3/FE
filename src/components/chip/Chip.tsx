import { twMerge } from 'tailwind-merge';

const CHIP_VARIANTS = {
  'rounded-filled':
    'rounded-full bg-green-light-02 text-green-dark-01 font-semibold',
  'rounded-light':
    'rounded-full bg-green-normal-01 text-gray-white font-semibold',
  'square-outlined':
    'rounded-md border border-green-normal-01 bg-gray-white text-green-normal-01',
  'square-filled': 'rounded-md bg-green-normal-01 text-gray-white px-2',
} as const;

type ChipVariant = keyof typeof CHIP_VARIANTS;

interface ChipProps {
  text: string;
  variant?: ChipVariant;
  isPast?: boolean;
  className?: string;
}

function Chip({
  text,
  variant = 'rounded-filled',
  isPast = false,
  className,
}: ChipProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-2.5 py-1 text-sm font-medium';

  const combinedClassName = twMerge(
    baseStyles,
    CHIP_VARIANTS[variant],
    isPast && 'bg-gray-normal-01 text-gray-dark-02',
    className,
  );

  return <span className={combinedClassName}>{text}</span>;
}

export default Chip;
