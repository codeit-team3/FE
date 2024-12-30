'use client';

import { useAuthStore } from '@/store/authStore';
import { MainContent, ProfileHeader } from './index';

function ProfilePage() {
  const { user } = useAuthStore();

  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} />
      <MainContent />
    </div>
  );
}

export default ProfilePage;
