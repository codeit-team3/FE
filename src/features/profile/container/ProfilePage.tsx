'use client';

import { User } from '@/types/user';
import { MainContent, ProfileHeader } from '../container';

export default function ProfilePage() {
  const user: User = {
    id: 1,
    name: 'John Doe',
    nickname: 'Johnny',
    email: 'john.doe@example.com',
    description: 'A software developer.',
    image: 'https://example.com/profile.jpg',
    createdAt: '2024-12-30T05:37:19.084Z',
    updatedAt: '2024-12-30T05:37:19.084Z',
  };

  return (
    <div className="flex w-full min-w-[375px] flex-1 flex-col">
      <ProfileHeader user={user} isMyProfilePage={false} />
      <MainContent user={user} isMyProfilePage={false} />
    </div>
  );
}
