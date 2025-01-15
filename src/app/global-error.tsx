'use client';

import Button from '@/components/button/Button';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <head></head>
      <body>
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h2 className="text-xl font-bold">치명적인 오류가 발생했습니다</h2>
          <p className="text-gray-600">
            {error.message || '서비스에 문제가 발생했습니다'}
          </p>

          <Button
            onClick={reset}
            text="다시 시도"
            size="small"
            fillType="solid"
            themeColor="green-normal-01"
            className="hover-dim"
          />
        </div>
      </body>
    </html>
  );
}
