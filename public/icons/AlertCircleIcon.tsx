import { SVGProps } from 'react';

interface AlertCircleIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function AlertCircleIcon({
  width = 50,
  height = 50,
  ...props
}: AlertCircleIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.9994 45.8337C36.5053 45.8337 45.8327 36.5063 45.8327 25.0003C45.8327 13.4944 36.5053 4.16699 24.9994 4.16699C13.4934 4.16699 4.16602 13.4944 4.16602 25.0003C4.16602 36.5063 13.4934 45.8337 24.9994 45.8337Z"
        stroke="#00A991"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 16.667V26.667"
        stroke="#00A991"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 33.333H25.0208"
        stroke="#00A991"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AlertCircleIcon;
