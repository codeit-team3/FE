import ProgressBar from '@/components/progress-bar/ProgressBar';
import RatingDisplay from '@/components/rating-display/RatingDisplay';

function ReviewSummarySection() {
  return (
    <section>
      <h2 className="mb-[10px] text-[20px] font-semibold text-gray-black">
        리뷰 평점 평균
      </h2>
      <div
        className="flex items-center justify-center gap-6 rounded-xl border-2 border-gray-normal-01 p-[30px] md:gap-[120px] lg:gap-[180px]"
        style={{
          gap: 'clamp(24px, 5vw, 180px)', // 최소 gap은 24px, 최대는 180px
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-2xl font-semibold">
            <span className="text-gray-black">4.0</span>
            <span className="text-gray-dark-01"> / 5</span>
          </div>
          <RatingDisplay ratingCount={4} />
        </div>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="flex items-center gap-3 text-sm font-medium"
              key={`rate-${5 - index}`}
            >
              <span className="whitespace-nowrap text-gray-dark-03">
                {5 - index}점
              </span>
              <div
                className="flex-1"
                style={{
                  minWidth: 'clamp(62px, 20vw, 240px)',
                }}
              >
                <ProgressBar percentage={5} color="bg-gray-dark-02" />
              </div>
              <span className="ml-auto text-gray-dark-01">2</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ReviewSummarySection;
