import RatingIcon from '../../../public/icons/RatingIcon';

export default function RatingDisplay({
  ratingCount,
}: {
  ratingCount: number;
}) {
  const normalizedRating = Math.min(ratingCount, 5);

  return (
    <div
      className="flex items-center gap-x-1"
      aria-label={`Rating: ${normalizedRating} out of 5`}
    >
      {Array.from({ length: normalizedRating }).map((_, index) => (
        <RatingIcon checked={true} key={`filled-${index}`} aria-hidden="true" />
      ))}
      {Array.from({ length: 5 - normalizedRating }).map((_, index) => (
        <RatingIcon checked={false} key={`empty-${index}`} aria-hidden="true" />
      ))}
    </div>
  );
}
