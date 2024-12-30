'use client';

import { useAuthStore } from '@/store/authStore';
import { MainContent, ProfileHeader } from '.';

function MyProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} isMyProfilePage={false} />
      <MainContent user={user} isMyProfilePage={false} />
    </div>
  );
}

export default MyProfilePage;
