export const COLORS = {
  background: 'bg-gray-900',
  default: 'text-white',
  dueSoon: 'text-orange-600',
} as const;

interface TextChipProps {
  text: string;
  isDueSoon?: boolean;
}

export function TextChip({ text, isDueSoon = false }: TextChipProps) {
  return (
    <div
      role="text-chip"
      aria-label={text}
      className={`h-[24px] w-fit rounded-[4px] ${COLORS.background} px-[8px] py-[2px] text-sm font-medium ${
        isDueSoon ? COLORS.dueSoon : COLORS.default
      }`}
    >
      {text}
    </div>
  );
}
