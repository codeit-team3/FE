import React from 'react';

interface CreateClubFormFieldProps
  extends React.ComponentPropsWithoutRef<'div'> {
  label: string;
  children: React.ReactNode;
  error?: string;
  currentLength?: number;
  maxLength?: number;
  optional?: boolean;
}

function CreateClubFormField({
  label,
  children,
  error,
  currentLength = 0,
  maxLength,
  optional = false,
  ...props
}: CreateClubFormFieldProps) {
  const isOverMaxLength = maxLength !== undefined && currentLength > maxLength;

  return (
    <div className="flex w-full flex-col gap-3" {...props}>
      <div className="flex w-full items-center justify-between">
        <label className="font-bold text-gray-darker">
          {label}
          {optional && <span className="text-gray-dark-01"> (선택)</span>}
        </label>
        {maxLength !== undefined && (
          <span className="text-sm">
            <span className="text-gray-dark-01">{currentLength}</span>/
            <span
              className={
                isOverMaxLength ? 'text-red-normal' : 'text-blue-light-active'
              }
            >
              {maxLength}
            </span>
          </span>
        )}
      </div>
      {children}
      {error && <p className="mt-1 text-sm text-red-normal">{error}</p>}
    </div>
  );
}

export default CreateClubFormField;
