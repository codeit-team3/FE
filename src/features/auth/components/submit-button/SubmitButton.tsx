interface SubmitButtonProps {
  children: React.ReactNode;
  isSubmitting?: boolean;
}

function SubmitButton({ children, isSubmitting = false }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full rounded-lg p-2 text-sm text-white sm:p-3 sm:text-base ${
        isSubmitting
          ? 'cursor-not-allowed bg-gray-400'
          : 'bg-orange-500 hover:bg-orange-600'
      }`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
