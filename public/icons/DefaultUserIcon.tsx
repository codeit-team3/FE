import { SVGProps } from 'react';

interface DefaultUserIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function DefaultUserIcon({
  width = 36,
  height = 36,
  ...props
}: DefaultUserIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="36" height="36" rx="18" fill="#E6F6F4" />
      <path
        d="M9 27C10.6336 24.3471 12.4141 22.5314 18 22.5314C23.5859 22.5314 25.3664 24.3471 27 27M22.4372 13.32C22.4372 15.7059 20.4506 17.64 18 17.64C15.5494 17.64 13.5628 15.7059 13.5628 13.32C13.5628 10.9341 15.5494 9 18 9C20.4506 9 22.4372 10.9341 22.4372 13.32Z"
        stroke="#00A991"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default DefaultUserIcon;
