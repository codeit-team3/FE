import ClubChip from './ClubChip';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ClubChip', () => {
  it('텍스트가 올바르게 렌더링되어야 한다', () => {
    render(<ClubChip text="참여완료" variant="completed" />);
    expect(screen.getByText('참여완료')).toBeInTheDocument();
  });

  it('모든 variant가 올바르게 렌더링되어야 한다', () => {
    const { rerender } = render(<ClubChip text="테스트" variant="completed" />);
    expect(screen.getByText('테스트')).toBeInTheDocument();

    rerender(<ClubChip text="테스트" variant="scheduled" />);
    expect(screen.getByText('테스트')).toBeInTheDocument();

    rerender(<ClubChip text="테스트" variant="pending" />);
    expect(screen.getByText('테스트')).toBeInTheDocument();

    rerender(<ClubChip text="테스트" variant="confirmed" />);
    expect(screen.getByText('테스트')).toBeInTheDocument();
  });

  it('className prop으로 스타일을 오버라이드할 수 있어야 한다', () => {
    render(
      <ClubChip text="테스트" variant="completed" className="custom-class" />,
    );
    expect(screen.getByText('테스트')).toHaveClass('custom-class');
  });
});
