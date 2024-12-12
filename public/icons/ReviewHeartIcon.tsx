import { SVGProps } from 'react';

interface ReviewHeartIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isClicked: boolean;
  onClick?: () => void;
}

function ReviewHeartIcon({
  width = 20.1,
  height = 17.48,
  isClicked = false,
  onClick,
  ...props
}: ReviewHeartIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer"
      role="button"
      aria-label={isClicked ? '리뷰 취소' : '리뷰'}
      aria-pressed={isClicked}
      {...props}
    >
      <path
        d="M7.41811 23.1797L19.3157 34.3562C19.6401 34.6609 19.8023 34.8133 20.0003 34.8133C20.1983 34.8133 20.3606 34.6609 20.685 34.3562L32.5825 23.1797C35.8428 20.117 36.2387 15.077 33.4967 11.5428L32.9811 10.8783C29.7008 6.65032 23.1164 7.35937 20.8114 12.1888C20.4859 12.8709 19.5148 12.8709 19.1892 12.1888C16.8843 7.35937 10.2999 6.65032 7.01956 10.8783L6.50397 11.5428C3.7619 15.077 4.15782 20.117 7.41811 23.1797Z"
        fill={isClicked ? '#2D8659' : '#CCCCCC'}
        className={!isClicked ? 'opacity-60' : ''}
      />
    </svg>
  );
}

export default ReviewHeartIcon;
