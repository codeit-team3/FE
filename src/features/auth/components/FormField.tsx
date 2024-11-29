interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
}

function FormField({ label, type, placeholder, id }: FormFieldProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <div className="w-full">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg bg-gray-50 p-2 sm:p-3"
        />
      </div>
    </div>
  );
}

export default FormField;
