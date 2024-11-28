import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { COLORS, TextChip } from './TextChip';

describe('TextChip', () => {
  it('텍스트가 올바르게 렌더링되어야 한다', () => {
    render(<TextChip text="테스트" />);
    const chip = screen.getByRole('text-chip');
    expect(chip).toBeInTheDocument();
  });

  it('기본 상태일 때 디폴트 색상과 기본 배경색이 적용되어야 한다', () => {
    render(<TextChip text="테스트" />);
    const chip = screen.getByRole('text-chip');
    expect(chip).toHaveClass(COLORS.default, COLORS.background);
  });

  it('isDueSoon이 true일 때 텍스트 색상이 변경되어야 한다.', () => {
    render(<TextChip text="테스트" isDueSoon={true} />);
    const chip = screen.getByRole('text-chip');
    expect(chip).toHaveClass(COLORS.dueSoon, COLORS.background);
  });
});
