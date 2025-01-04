interface EmptyStateProps {
  title: string;
  subtitle: string;
  className?: string;
}

function EmptyState({ title, subtitle, className }: EmptyStateProps) {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center text-center font-medium text-gray-normal-03 ${className || ''}`}
    >
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}

export default EmptyState;
