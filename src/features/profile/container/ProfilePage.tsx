'use client';

import { useAuthStore } from '@/store/authStore';
import { MainContent, ProfileHeader } from '../container';

function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="flex min-h-full w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} />
      <MainContent user={user} />
    </div>
  );
}

export default ProfilePage;
