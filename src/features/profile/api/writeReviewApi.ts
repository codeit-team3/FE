import apiClient from '@/lib/utils/apiClient';

interface WriteReviewParams {
  bookClubId: number;
  rating: number;
  content: string;
}

export const writeReview = async ({
  bookClubId,
  rating,
  content,
}: WriteReviewParams) => {
  try {
    await apiClient.post(`book-clubs/${bookClubId}/reviews`, {
      rating,
      content,
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};
