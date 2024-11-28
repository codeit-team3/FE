export const PROGRESS_COLORS = {
  background: 'bg-orange-50',
  default: 'bg-orange-600',
  full: 'bg-orange-400',
} as const;

interface ProgressBarProps {
  current: number;
  max: number;
  height?: number;
  borderRadius?: number;
}

function ProgressBar({
  current,
  max,
  height = 4,
  borderRadius = 6,
}: ProgressBarProps) {
  const percentage = Math.min((current / max) * 100, 100);
  const isFull = current >= max;
  const fillColor = isFull ? PROGRESS_COLORS.full : PROGRESS_COLORS.default;

  return (
    <div
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={max}
      className={`w-full ${PROGRESS_COLORS.background}`}
      style={{ height, borderRadius }}
    >
      <div
        className={`h-full transition-all duration-300 ${fillColor}`}
        style={{
          width: `${percentage}%`,
          borderRadius,
        }}
      />
    </div>
  );
}

export default ProgressBar;
