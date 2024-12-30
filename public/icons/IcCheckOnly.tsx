import { SVGProps } from 'react';

interface IcCheckOnlyProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
}

function IcCheckOnly({
  width = 12,
  height = 9,
  stroke = '#E6F6F4',
  className = '',
  ...props
}: IcCheckOnlyProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M1.00004 2.5L4.50009 6C6.98524 3.21054 6.46948 3.78946 8.95464 1"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default IcCheckOnly;
