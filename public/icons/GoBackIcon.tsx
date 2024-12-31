function GoBackIcon({
  width = 14,
  height = 14,
  strokeColor = '#B4B5B6',
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      role="button"
      aria-label="뒤로 가기"
      {...props}
    >
      <path d="M25 30L10 15L25 0" stroke={strokeColor} strokeWidth="2" />
    </svg>
  );
}

export default GoBackIcon;
