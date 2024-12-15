'use client';

import { FormContainer } from '@/features/club-create/container';

function CreateBookClubPage() {
  return (
    <main className="container mx-auto min-w-[375px] max-w-[1000px] bg-gray-white p-6 pb-20">
      <h1 className="mb-8 text-2xl font-bold">모임 만들기</h1>
      <FormContainer />
    </main>
  );
}

export default CreateBookClubPage;
