'use client';

import { FormContainer } from '@/features/club-create/container';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateBookClub() {
  return (
    <main className="container mx-auto min-w-[375px] max-w-[1000px] bg-gray-white p-6 pb-20">
      <h1 className="mb-8 text-2xl font-bold">모임 만들기</h1>
      <FormContainer />
    </main>
  );
}
