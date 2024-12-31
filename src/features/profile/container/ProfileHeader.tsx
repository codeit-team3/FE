import { ProfilePageProps } from '../types';
import { Info } from '../components/info';

export default function ProfileHeader({ user, isMyPage }: ProfilePageProps) {
  return (
    <div className="flex w-full min-w-[336px] flex-col items-center pb-[20px] pt-[24px] sm:pl-[20px] sm:pr-[19px] md:px-[24px] lg:px-[102px]">
      <span className="w-full min-w-[336px] text-2xl font-bold text-gray-black">
        {isMyPage ? '마이페이지' : user?.nickname + '님의 페이지'}
      </span>
      <Info user={user} isMyPage={isMyPage} />
    </div>
  );
}
