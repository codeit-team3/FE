import React from 'react';

interface CreateClubFormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
  currentLength?: number;
  maxLength?: number;
}

function CreateClubFormField({
  label,
  children,
  error,
  currentLength = 0,
  maxLength,
}: CreateClubFormFieldProps) {
  const isOverMaxLength = maxLength !== undefined && currentLength > maxLength;

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full items-center justify-between">
        <label className="font-semibold text-gray-black">{label}</label>
        {maxLength !== undefined && (
          <span className="text-sm">
            <span className="text-gray-black">{currentLength}</span>/
            <span
              className={isOverMaxLength ? 'text-red-500' : 'text-blue-500'}
            >
              {maxLength}
            </span>
          </span>
        )}
      </div>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default CreateClubFormField;
