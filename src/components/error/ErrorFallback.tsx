'use client';

import { FallbackProps } from './ErrorBoundary';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div
      role="alert"
      className="rounded-lg border border-red-200 bg-red-50 p-4"
    >
      <h2 className="text-lg font-bold text-red-600">오류가 발생했습니다</h2>
      <p className="mt-2 text-sm text-gray-600">{error?.message}</p>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
      >
        다시 시도
      </button>
    </div>
  );
}
