import { twMerge } from 'tailwind-merge';

const CHIP_VARIANTS = {
  'rounded-filled': 'rounded-full bg-green-light-hover text-green-dark',
  'rounded-light': 'rounded-full bg-green-normal text-white',
  'square-light':
    'rounded border border-gray-normal-hover bg-gray-light text-gray-dark',
  'square-filled': 'rounded bg-green-dark text-gray-dark',
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
