import React from 'react';

interface ProgressBarProps extends React.ComponentPropsWithoutRef<'div'> {
  percentage: number;
  isPast?: boolean;
  color?: string;
}

function ProgressBar({
  percentage,
  isPast = false,
  color,
  className,
  ...props
}: ProgressBarProps) {
  const fillColor =
    color || (isPast ? 'bg-gray-dark-02' : 'bg-green-normal-01');

  const limitedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div
      role="progressbar"
      aria-valuenow={limitedPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-1 w-full rounded-md bg-gray-normal-01 ${className || ''}`}
      {...props}
    >
      <div
        className={`h-full rounded-md transition-all duration-300 ${fillColor}`}
        style={{
          width: `${limitedPercentage}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
