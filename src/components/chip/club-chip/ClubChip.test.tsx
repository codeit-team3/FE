import ClubChip from './ClubChip';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ClubChip', () => {
  it('variant에 따라 올바른 텍스트가 렌더링되어야 한다', () => {
    render(<ClubChip variant="completed" />);
    expect(screen.getByText('참여완료')).toBeInTheDocument();
  });

  it('모든 variant가 올바르게 렌더링되어야 한다', () => {
    const { rerender } = render(<ClubChip variant="completed" />);
    expect(screen.getByText('참여완료')).toBeInTheDocument();

    rerender(<ClubChip variant="scheduled" />);
    expect(screen.getByText('참여예정')).toBeInTheDocument();

    rerender(<ClubChip variant="pending" />);
    expect(screen.getByText('개설대기')).toBeInTheDocument();

    rerender(<ClubChip variant="confirmed" />);
    expect(screen.getByText('개설확정')).toBeInTheDocument();
  });

  it('className prop으로 스타일을 오버라이드할 수 있어야 한다', () => {
    render(<ClubChip variant="completed" className="custom-class" />);
    expect(screen.getByText('참여완료')).toHaveClass('custom-class');
  });
});
