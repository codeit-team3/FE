import { SVGProps } from 'react';

interface IcDropDownProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

function IcDropDown({
  width = 24,
  height = 24,
  isActive = false,
  color,
}: IcDropDownProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={`${isActive ? color : 'stroke-gray-dark-hover'}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // className={`${isActive ? color : 'stroke-gray-dark-hover'}`}
        d="M17 10L12 15L7 10"
        stroke={isActive ? color : '#909192'}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IcDropDown;
