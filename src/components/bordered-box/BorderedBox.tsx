type BorderColorType = 'gray' | 'orange';

interface BorderedBoxProps {
  children: React.ReactNode;
  borderColor?: BorderColorType;
}

const BORDER_COLOR = {
  gray: 'border-gray-200',
  orange: 'border-orange-500',
} as const;

function BorderedBox({ children, borderColor = 'gray' }: BorderedBoxProps) {
  return (
    <div
      className={`border-2 bg-white ${BORDER_COLOR[borderColor]} rounded-lg py-6`}
    >
      {children}
    </div>
  );
}

export default BorderedBox;
