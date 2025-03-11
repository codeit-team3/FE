'use client';

import ErrorTemplate from '@/components/error/ErrorTemplate';

export default function BookClubError({
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
      title="북클럽 목록 조회 오류"
      message="북클럽 목록 조회 페이지 정보를 불러오던 중 에러가 발생했습니다."
    />
  );
}
