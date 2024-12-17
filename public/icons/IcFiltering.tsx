import { SVGProps } from 'react';

interface IcFilteringProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  color?: string;
}

function IcFiltering({
  width = 24,
  height = 24,
  isActive = false,
  color = '#111827',
}: IcFilteringProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke={isActive ? '#F9FAFB' : color}
        d="M12.7151 15.4653C12.3975 15.7654 11.9008 15.7654 11.5832 15.4653L5.8047 10.006C5.26275 9.49404 5.6251 8.58286 6.37066 8.58286L17.9276 8.58286C18.6732 8.58286 19.0355 9.49404 18.4936 10.006L12.7151 15.4653Z"
        fill={isActive ? '#F9FAFB' : color}
      />
    </svg>
  );
}

export default IcFiltering;
