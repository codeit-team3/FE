import { ProfilePageProps } from '../types';
import { Info } from '../components/info';
import { useAuthStore } from '@/store/authStore';
import { useGetUserByPath } from '@/lib/hooks/useGetUserByPath';

export default function ProfileHeader({ isMyPage }: ProfilePageProps) {
  const me = useAuthStore().user;
  const user = useGetUserByPath();

  return (
    <div className="flex w-full min-w-[336px] flex-col items-center pb-[20px] pt-[24px] sm:pl-[20px] sm:pr-[19px] md:px-[24px] lg:px-[102px]">
      <span className="w-full min-w-[336px] text-2xl font-bold text-gray-black">
        {isMyPage ? '마이페이지' : user?.nickname + '님의 페이지'}
      </span>
      {isMyPage ? (
        <Info user={me} isMyPage={isMyPage} />
      ) : (
        <Info user={user} isMyPage={isMyPage} />
      )}
    </div>
  );
}
