import { SVGProps } from 'react';

interface PencilIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function PencilIcon({ width = 13, height = 14, ...props }: PencilIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.81263 1.06597C9.98365 0.888905 10.1882 0.747672 10.4144 0.650511C10.6406 0.553351 10.8838 0.502209 11.13 0.50007C11.3762 0.497931 11.6203 0.544838 11.8481 0.638053C12.076 0.731268 12.2829 0.868925 12.457 1.04299C12.6311 1.21706 12.7687 1.42405 12.8619 1.65188C12.9552 1.87972 13.0021 2.12384 12.9999 2.37C12.9978 2.61616 12.9466 2.85942 12.8495 3.0856C12.7523 3.31179 12.6111 3.51635 12.434 3.68737L11.699 4.42243L9.07757 1.80104L9.81263 1.06597ZM7.76687 3.11174L0 10.8786V13.5H2.6214L10.3892 5.73313L7.76594 3.11174H7.76687Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PencilIcon;
