'use client';

import { useQuery } from '@tanstack/react-query';
import { ReviewList, ReviewSummary } from '.';
import { bookClubs } from '@/api/book-club/react-query';
import { useEffect, useState } from 'react';
import { ClubDetailReviewFilters } from '@/types/review';

function ReviewSection({ idAsNumber }: { idAsNumber: number }) {
  const [filters, setFilters] = useState<ClubDetailReviewFilters>({
    order: 'DESC',
    page: 1,
    size: 10,
  });

  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsNumber)._ctx.reviews(filters),
  });
  let reviewInfo = data?.data;

  useEffect(() => {
    console.log(data?.data);
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <ReviewSummary reviewInfo={reviewInfo} />
      <ReviewList reviewInfo={reviewInfo} setFilters={setFilters} />
    </>
  );
}
export default ReviewSection;
