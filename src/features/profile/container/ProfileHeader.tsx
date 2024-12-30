import { ProfilePageProps } from '../types';
import { Info } from '../components/info';

export default function ProfileHeader({ user }: ProfilePageProps) {
  return (
    <div className="flex w-full min-w-[336px] flex-col items-center pb-[20px] pt-[24px] sm:pl-[20px] sm:pr-[19px] md:px-[24px] lg:px-[102px]">
      {/* TODO: 프로필 페이지가 로그인된 유저의 프로필 페이지와 일치 여부 확인 후 마이페이지 or **님의 페이지 */}
      <span className="w-full min-w-[336px] text-2xl font-bold text-gray-black">
        마이 페이지
      </span>
      <Info user={user} />
    </div>
  );
}
