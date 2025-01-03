function HamburgerMenuIcon({
  width = 18,
  height = 14,
  strokeColor = '#B4B5B6',
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      role="button"
      aria-label="메뉴 열기"
      {...props}
    >
      <path
        d="M1 13H17M1 7H17M1 1H17"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default HamburgerMenuIcon;
