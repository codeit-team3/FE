import { SVGProps } from 'react';

interface RightArrowProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeColor?: string;
}

function RightArrow({
  width = 18,
  height = 18,
  strokeColor = '#EA580C',
  ...props
}: RightArrowProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 9H14.625M14.625 9L8.25 2.625M14.625 9L8.25 15.375"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RightArrow;
