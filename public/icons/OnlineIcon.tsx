import { SVGProps } from 'react';

interface OnlineIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isPast?: boolean;
}

function OnlineIcon({
  width = 24,
  height = 24,
  isPast = false,
  ...props
}: OnlineIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.9156 11.2389L12.076 19.7668C11.7819 20.1906 11.0898 20.0003 11.0898 19.49L11.0812 14.612C11.0812 14.0498 10.6053 13.6 10.0171 13.5914L6.53064 13.5482C6.10673 13.5395 5.85585 13.0984 6.08943 12.7611L11.929 4.23325C12.2231 3.80945 12.9152 3.99973 12.9152 4.51002L12.9239 9.38803C12.9239 9.95021 13.3997 10.3999 13.9879 10.4086L17.4744 10.4518C17.8896 10.4518 18.1405 10.9016 17.9156 11.2389Z"
        stroke={isPast ? '#6C6C6D' : '#009883'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default OnlineIcon;
