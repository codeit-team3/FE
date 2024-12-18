import { User } from '../../types';

interface MyReviewListProps {
  user: User | null;
  sortBy: string | undefined;
}

export default function MyReviewList({ user, sortBy }: MyReviewListProps) {
  console.log(user);
  console.log(sortBy);
  return <div>나의 리뷰 뷰</div>;
}
