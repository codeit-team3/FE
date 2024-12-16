import { User } from '../../types';

interface HostedClubListProps {
  user: User | null;
  sortBy: string | undefined;
}

export default function HostedClubList({ user, sortBy }: HostedClubListProps) {
  console.log(user);
  console.log(sortBy);
  return <div>내가 만든 모임 뷰</div>;
}
