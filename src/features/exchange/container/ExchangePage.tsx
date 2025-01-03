'use client';

import { HeaderSection } from '@/components/common-layout';
import { useAuthStore } from '@/store/authStore';
import ExchangeMainSection from './ExchangeMainSection';

export default function ExchangePage() {
  const user = useAuthStore((state) => state.user);
  const userName = user?.nickname || '북코';

  return (
    <>
      <HeaderSection
        title={
          <>
            반가워요, <span className="text-green-normal-01">{userName}</span>
            님!
            <br />
            잠자고 있는 책에게 새로운 친구를 소개해주세요!
          </>
        }
      />
      <ExchangeMainSection />
    </>
  );
}
