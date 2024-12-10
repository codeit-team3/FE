import { SVGProps } from 'react';

interface IcSortingProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

function IcSorting({
  width = 24,
  height = 24,
  isActive = false,
  color = '#111827',
}: IcSortingProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 11L7 7M7 7L11 11M7 7V17"
        stroke={isActive ? '#F9FAFB' : color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M21 13L17 17M17 17L13 13M17 17V7"
        stroke={isActive ? '#F9FAFB' : color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default IcSorting;
