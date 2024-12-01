export const PARTICIPANT_COLORS = {
  default: 'text-gray-700',
  full: 'text-orange-500',
} as const;

interface ParticipantCounterProps {
  current: number;
  max: number;
}

function ParticipantCounter({ current, max }: ParticipantCounterProps) {
  const displayCount = current > max ? max : current;
  const isFull = current >= max;
  const colorStyle = isFull
    ? PARTICIPANT_COLORS.full
    : PARTICIPANT_COLORS.default;

  return (
    <div className="flex items-center gap-0.5">
      <svg
        role="participant-icon"
        aria-label="참가자 아이콘"
        className={`h-4 w-4 ${colorStyle}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
      <span
        role="participant-count"
        aria-label="참가자 현황"
        className={`text-sm font-medium ${colorStyle}`}
      >{`${displayCount}/${max}`}</span>
    </div>
  );
}

export default ParticipantCounter;
