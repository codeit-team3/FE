import { SVGProps } from 'react';

interface IcCloseProps extends SVGProps<SVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

function IcClose({
  width = 24,
  height = 24,
  isActive = false,
  color,
}: IcCloseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      className={`${isActive ? color : 'stroke-gray-dark-02'}`}
    >
      <path
        stroke={isActive ? color : '#909192'}
        strokeLinecap="round"
        strokeWidth="1.8"
        d="m5 5 14.5 14.5M19.5 5 5 19.5"
      />
    </svg>
  );
}

export default IcClose;
