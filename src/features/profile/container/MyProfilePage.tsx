'use client';

import { useAuthStore } from '@/store/authStore';
import { MainContent, ProfileHeader } from '.';

function MyProfilePage() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} isMyPage={true} />
      <MainContent isMyPage={true} />
    </div>
  );
}

export default MyProfilePage;
