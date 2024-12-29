import { ProfilePageProps } from '../types';
import Profile from './info/Info';

export default function ProfileHeader({ user }: ProfilePageProps) {
  return (
    <div className="w-fuㅌll flex min-w-[336px] flex-col items-center pb-[20px] pt-[24px] sm:pl-[20px] sm:pr-[19px] md:px-[24px] lg:px-[102px]">
      <span className="w-full min-w-[336px] text-2xl font-bold text-gray-black">
        마이 페이지
      </span>
      <Profile user={user} />
    </div>
  );
}
