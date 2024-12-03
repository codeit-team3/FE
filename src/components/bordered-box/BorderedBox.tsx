type BorderColorType = 'gray' | 'orange';

interface BorderedBoxProps {
  children: React.ReactNode;
  borderColor?: BorderColorType;
  nonePadding?: boolean;
}

const BORDER_COLOR = {
  gray: 'border-gray-200',
  orange: 'border-orange-500',
} as const;

function BorderedBox({
  children,
  borderColor = 'gray',
  nonePadding = false,
}: BorderedBoxProps) {
  return (
    <div
      className={`h-full w-full border-2 bg-white ${BORDER_COLOR[borderColor]} rounded-3xl ${
        nonePadding ? '' : 'py-6'
      }`}
    >
      {children}
    </div>
  );
}

export default BorderedBox;
