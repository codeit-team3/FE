interface ParticipantCounterProps
  extends React.ComponentPropsWithoutRef<'div'> {
  current: number;
  max?: number;
  isPast?: boolean;
}

function ParticipantCounter({
  current,
  max,
  isPast = false,
  ...props
}: ParticipantCounterProps) {
  const isFull = max ? current >= max : false;
  const primaryColor = isPast ? 'text-gray-dark-02' : 'text-green-normal-01';
  const maxColor = isFull ? primaryColor : 'text-gray-dark-01';

  return (
    <div className="flex items-center gap-0.5" {...props}>
      <svg
        role="participant-icon"
        aria-label="참가자 아이콘"
        className={`h-4 w-4 ${primaryColor}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <span
        role="participant-count"
        aria-label="참가자 현황"
        className="text-sm font-medium"
      >
        <span className={primaryColor}>{current}</span>
        {max && <span className={maxColor}>/{max}</span>}
      </span>
    </div>
  );
}

export default ParticipantCounter;
