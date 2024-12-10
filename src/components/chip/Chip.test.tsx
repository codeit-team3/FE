import Chip from '@/components/chip/Chip';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('TextChip', () => {
  it('텍스트가 올바르게 렌더링되어야 한다', () => {
    render(<Chip text="테스트" />);
    const chip = screen.getByText('테스트');
    expect(chip).toBeInTheDocument();
  });

  it('className prop으로 스타일을 오버라이드할 수 있어야 한다', () => {
    render(<Chip text="테스트" className="text-blue-500" />);
    const chip = screen.getByText('테스트');
    expect(chip).toHaveClass('text-blue-500');
    expect(chip).not.toHaveClass('text-green-darker');
  });
});
