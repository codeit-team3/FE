interface SubmitButtonProps {
  children: React.ReactNode;
}

function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="w-full rounded-lg bg-gray-400 p-2 text-sm text-white sm:p-3 sm:text-base"
    >
      {children}
    </button>
  );
}

export default SubmitButton;
