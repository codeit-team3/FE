'use client';

import Button from '@/components/button/Button';

interface ErrorTemplateProps {
  error: Error;
  reset: () => void;
  title?: string;
  message?: string;
  children?: React.ReactNode;
}

export default function ErrorTemplate({
  error,
  reset,
  title = '오류가 발생했습니다',
  message,
  children,
}: ErrorTemplateProps) {
  return (
    <div className="flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{message || error.message}</p>

      <Button
        onClick={reset}
        text="다시 시도"
        size="small"
        fillType="solid"
        themeColor="green-normal-01"
        className="hover-dim"
      >
        다시 시도
      </Button>

      {children}
    </div>
  );
}
