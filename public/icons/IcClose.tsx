import { SVGProps } from 'react';

interface IcCloseProps extends SVGProps<SVGElement> {
  width?: number;
  height?: number;
  strokeColor?: string;
}

function IcClose({
  width = 24,
  height = 24,
  strokeColor = '#111827',
}: IcCloseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke={strokeColor}
        strokeLinecap="round"
        strokeWidth="1.8"
        d="m5 5 14.5 14.5M19.5 5 5 19.5"
      />
    </svg>
  );
}

export default IcClose;
