import { SVGProps } from 'react';

interface EditIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function EditIcon({ width = 7, height = 9, ...props }: EditIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 7 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.12284 0.602564C3.30417 0.199663 3.77368 0.0288589 4.17151 0.221063L5.71719 0.967829C6.11502 1.16003 6.29053 1.64246 6.10919 2.04536L3.37194 8.12719C3.28474 8.32093 3.12502 8.46995 2.92801 8.54138L1.80364 8.94904C1.39456 9.09737 0.939295 8.87741 0.786006 8.4574L0.364689 7.30297C0.290865 7.10069 0.298382 6.87813 0.385582 6.68439L3.12284 0.602564Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default EditIcon;
