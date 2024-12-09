import { twMerge } from 'tailwind-merge';

const CHIP_VARIANTS = {
  'rounded-filled': 'rounded-full bg-green-light-02 text-green-dark-01',
  'rounded-light': 'rounded-full bg-green-normal-01 text-gray-white',
  'square-light':
    'rounded border border-gray-normal-02 bg-gray-light-01 text-gray-dark-01',
  'square-filled': 'rounded bg-green-dark-01 text-gray-dark-01',
} as const;

type ChipVariant = keyof typeof CHIP_VARIANTS;

interface ChipProps {
  text: string;
  variant?: ChipVariant;
  className?: string;
}

function Chip({ text, variant = 'rounded-filled', className }: ChipProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-2.5 py-1 text-sm font-semibold';

  const combinedClassName = twMerge(
    baseStyles,
    CHIP_VARIANTS[variant],
    className,
  );

  return <span className={combinedClassName}>{text}</span>;
}

export default Chip;
