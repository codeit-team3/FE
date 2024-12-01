export const COLORS = {
  background: 'bg-gray-900',
  default: 'text-white',
  isTime: 'text-orange-600',
} as const;

interface TextChipProps {
  text: string;
  isTime?: boolean;
}

export function TextChip({ text, isTime = false }: TextChipProps) {
  return (
    <div
      role="text-chip"
      aria-label={text}
      className={`h-[24px] w-fit rounded-[4px] ${COLORS.background} px-[8px] py-[2px] text-sm font-medium ${
        isTime ? COLORS.isTime : COLORS.default
      }`}
    >
      {text}
    </div>
  );
}
