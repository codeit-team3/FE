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

  return (
    <div
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-1 w-full rounded-md bg-gray-normal-01 ${className || ''}`}
      {...props}
    >
      <div
        className={`h-full rounded-md transition-all duration-300 ${fillColor}`}
        style={{
          width: `${percentage}%`,
        }}
      />
    </div>
  );
}

export default ProgressBar;
