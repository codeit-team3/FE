import { SVGProps } from 'react';

interface IcSortingProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

function IcSorting({
  width = 20,
  height = 14,
  isActive = false,
  color = '#111827',
}: IcSortingProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke={isActive ? '#F9FAFB' : color}
        strokeLinecap="round"
        strokeWidth="1.8"
        d="m1 6 4-4m0 0 4 4M5 2v10M19 8l-4 4m0 0-4-4m4 4V2"
      />
    </svg>
  );
}

export default IcSorting;
