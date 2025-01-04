import ProgressBar from '@/components/progress-bar/ProgressBar';
import RatingDisplay from '@/components/rating-display/RatingDisplay';
import { ClubReviewResponse } from '../types';
import {
  calculateRatingPercentage,
  getRatingCount,
} from '@/features/club-details/utils/rating';

function ReviewSummary({ reviewInfo }: { reviewInfo: ClubReviewResponse }) {
  return (
    <section>
      <h2 className="mb-[10px] text-[20px] font-semibold text-gray-black">
        리뷰 평점 평균
      </h2>
      <div
        className="flex items-center justify-center gap-6 rounded-xl border-2 border-gray-normal-01 p-[30px] md:gap-[120px] lg:gap-[180px]"
        style={{
          gap: 'clamp(24px, 5vw, 180px)',
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-2xl font-semibold">
            <span className="text-gray-black">{reviewInfo.averageScore}</span>
            <span className="text-gray-dark-01"> / 5</span>
          </div>
          <RatingDisplay ratingCount={reviewInfo.averageScore} />
        </div>
        <div className="flex flex-col gap-1">
          {[5, 4, 3, 2, 1].map((score) => (
            <div
              className="flex items-center gap-3 text-sm font-medium"
              key={`rate-${score}`}
            >
              <span className="whitespace-nowrap text-gray-dark-03">
                {score}점
              </span>
              <div
                className="flex-1"
                style={{
                  minWidth: 'clamp(62px, 20vw, 240px)',
                }}
              >
                <ProgressBar
                  percentage={calculateRatingPercentage(
                    score,
                    reviewInfo.ratingCounts,
                  )}
                  color="bg-gray-dark-02"
                />
              </div>
              <span className="ml-auto text-gray-dark-01">
                {getRatingCount(score, reviewInfo.ratingCounts)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSummary;
