'use client';

import { useQuery } from '@tanstack/react-query';
import { ReviewList, ReviewSummary } from '.';
import { bookClubs } from '@/api/book-club/react-query';
import { useEffect } from 'react';

function ReviewSection({ idAsNumber }: { idAsNumber: number }) {
  const { data, isLoading, error } = useQuery({
    ...bookClubs.detail(idAsNumber)._ctx.reviews(),
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
      <ReviewList reviewInfo={reviewInfo} />
    </>
  );
}
export default ReviewSection;
