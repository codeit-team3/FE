import { SVGProps } from 'react';

interface IcEditProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: string;
}

export default function IcEdit({
  width = 13,
  height = 17,
  color = '#B4B5B6',
}: IcEditProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.02081 1.22574C6.20672 0.824923 6.68172 0.652036 7.08177 0.839583L10.525 2.45381C10.9251 2.64135 11.0987 3.11831 10.9128 3.51913L6.14607 13.7962C6.05554 13.9913 5.89037 14.1415 5.68783 14.2128L3.18314 15.094C2.7735 15.2381 2.32329 15.027 2.16979 14.6189L1.23125 12.1235C1.15535 11.9217 1.1636 11.698 1.25413 11.5028L6.02081 1.22574Z"
        fill={color}
      />
      <path d="M2.66699 1.56641L12.2024 6.04014" stroke="white" />
    </svg>
  );
}
