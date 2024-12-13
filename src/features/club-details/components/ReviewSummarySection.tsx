import ProgressBar from '@/components/progress-bar/ProgressBar';
import RatingDisplay from '@/components/rating-display/RatingDisplay';

function ReviewSummarySection() {
  return (
    <section className="flex w-full flex-col gap-2.5 border-y-2 border-gray-200 bg-white p-6">
      <div className="flex items-center justify-center gap-5 md:gap-[120px] lg:gap-[180px]">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="text-xl font-semibold">
            <span className="text-gray-900">4.0</span>
            <span className="text-gray-400"> /5</span>
          </div>
          <RatingDisplay ratingCount={4} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-700">5점</span>
            <div className="min-w-20 md:min-w-[240px]">
              <ProgressBar percentage={5} />
            </div>
            <span className="text-gray-400">27</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-700">4점</span>
            <div className="min-w-20 md:min-w-[240px]">
              <ProgressBar percentage={5} />
            </div>
            <span className="text-gray-400">19</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-700">3점</span>
            <div className="min-w-20 md:min-w-[240px]">
              <ProgressBar percentage={5} />
            </div>
            <span className="text-gray-400">2</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-700">2점</span>
            <div className="min-w-20 md:min-w-[240px]">
              <ProgressBar percentage={5} />
            </div>
            <span className="text-gray-400">0</span>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-700">1점</span>
            <div className="min-w-20 md:min-w-[240px]">
              <ProgressBar percentage={5} />
            </div>
            <span className="text-gray-400">0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ReviewSummarySection;
