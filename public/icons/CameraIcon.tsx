import { SVGProps } from 'react';

interface CameraIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

function CameraIcon({ width = 50, height = 50, ...props }: CameraIconProps) {
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
        d="M7.82098 15.987C7.05521 16.7528 6.625 17.7914 6.625 18.8743V37.2493C6.625 38.3323 7.05521 39.3709 7.82098 40.1367C8.58675 40.9025 9.62537 41.3327 10.7083 41.3327H39.2917C40.3746 41.3327 41.4132 40.9025 42.179 40.1367C42.9448 39.3709 43.375 38.3323 43.375 37.2493V18.8743C43.375 17.7914 42.9448 16.7528 42.179 15.987C41.4132 15.2212 40.3746 14.791 39.2917 14.791H37.3929C36.7208 14.7911 36.0591 14.6253 35.4665 14.3083C34.8738 13.9914 34.3686 13.533 33.9956 12.9739L32.3378 10.4831C31.9647 9.92402 31.4595 9.46566 30.8669 9.14869C30.2742 8.83171 29.6125 8.66592 28.9404 8.66602H21.0596C20.3875 8.66592 19.7258 8.83171 19.1331 9.14869C18.5405 9.46566 18.0353 9.92402 17.6623 10.4831L16.0044 12.9739C15.6314 13.533 15.1262 13.9914 14.5335 14.3083C13.9409 14.6253 13.2792 14.7911 12.6071 14.791H10.7083C9.62537 14.791 8.58675 15.2212 7.82098 15.987Z"
        stroke="#C0C1C2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.331 31.372C30.4797 30.2234 31.125 28.6655 31.125 27.041C31.125 25.4166 30.4797 23.8586 29.331 22.71C28.1824 21.5613 26.6245 20.916 25 20.916C23.3755 20.916 21.8176 21.5613 20.669 22.71C19.5203 23.8586 18.875 25.4166 18.875 27.041C18.875 28.6655 19.5203 30.2234 20.669 31.372C21.8176 32.5207 23.3755 33.166 25 33.166C26.6245 33.166 28.1824 32.5207 29.331 31.372Z"
        stroke="#C0C1C2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CameraIcon;
