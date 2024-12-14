'use client';

import MainContent from './MainContent';
import ProfileHeader from './ProfileHeader';
import { useAuthStore } from '@/store/authStore';

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
