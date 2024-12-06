import { SVGProps } from 'react';

interface IcCheckProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
}

function IcCheck({
  width = 24,
  height = 24,
  className = '',
  ...props
}: IcCheckProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="9" fill="currentColor" />
      <path
        d="M8.5 11.8245L11.0087 14.3333L15.342 10"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IcCheck;
