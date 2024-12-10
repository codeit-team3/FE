interface CreateClubFormFieldProps {
  label: string;
  children: React.ReactNode;
  error?: string;
}

function CreateClubFormField({
  label,
  children,
  error,
}: CreateClubFormFieldProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-semibold text-gray-black">{label}</label>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}

export default CreateClubFormField;
