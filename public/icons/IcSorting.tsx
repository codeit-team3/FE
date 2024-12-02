import { SVGProps } from 'react';

interface IcSortingProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
}

const TEXT_COLOR = {
  default: '#111827',
  active: '#F9FAFB',
};

function IcSorting({
  width = 20,
  height = 14,
  isActive = false,
}: IcSortingProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path
        stroke={isActive ? TEXT_COLOR.active : TEXT_COLOR.default}
        strokeLinecap="round"
        strokeWidth="1.8"
        d="m1 6 4-4m0 0 4 4M5 2v10M19 8l-4 4m0 0-4-4m4 4V2"
      />
    </svg>
  );
}

export default IcSorting;
