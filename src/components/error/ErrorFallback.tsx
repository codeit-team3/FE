'use client';

import Button from '@/components/button/Button';
import { FallbackProps } from './ErrorBoundary';
import { AlertCircleIcon } from '../../../public/icons';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center gap-3">
      <AlertCircleIcon className="mb-2" />
      {error && (
        <h2 className="text-md font-semibold">
          요청을 처리하는 과정에서 오류가 발생했습니다. 다시 시도해주세요.
        </h2>
      )}

      <Button
        onClick={resetErrorBoundary}
        text="다시 시도"
        size="small"
        fillType="solid"
        themeColor="green-normal-01"
        className="hover-dim"
      >
        다시 시도
      </Button>
    </div>
  );
}
