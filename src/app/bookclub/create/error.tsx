'use client';

import ErrorTemplate from '@/components/error/ErrorTemplate';

export default function BookClubCreateError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorTemplate
      error={error}
      reset={reset}
      title="북클럽 생성 오류"
      message="북클럽 생성 페이지 정보를 불러오던 중 에러가 발생했습니다."
    />
  );
}
