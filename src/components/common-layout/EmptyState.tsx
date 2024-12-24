interface EmptyStateProps {
  title: string;
  subtitle: string;
  className?: string;
}

function EmptyState({ title, subtitle, className }: EmptyStateProps) {
  return (
    <div
      className={`mt-12 flex flex-col items-center justify-center font-medium text-gray-normal-03 md:mt-[207px] lg:mt-[180px] ${className || ''}`}
    >
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}

export default EmptyState;
