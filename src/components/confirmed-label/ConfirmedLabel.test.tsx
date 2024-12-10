import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ConfirmedLabel from './ConfirmedLabel';

describe('ConfirmedLabel', () => {
  it('기본 상태에서 개설확정으로 표시되는지 확인', () => {
    render(<ConfirmedLabel />);
    expect(screen.getByRole('confirmed-text')).toHaveTextContent('개설확정');
  });

  it('visible이 false일 때 컴포넌트가 렌더링되지 않는지 확인', () => {
    render(<ConfirmedLabel visible={false} />);
    expect(screen.queryByRole('confirmed-text')).not.toBeInTheDocument();
  });

  it('variant가 closed일 때 모집마감으로 표시되는지 확인', () => {
    render(<ConfirmedLabel variant="closed" />);
    expect(screen.getByRole('confirmed-text')).toHaveTextContent('모집마감');
  });

  it('isPast가 true일 때도 텍스트가 올바르게 표시되는지 확인', () => {
    render(<ConfirmedLabel variant="closed" isPast={true} />);
    expect(screen.getByRole('confirmed-text')).toHaveTextContent('모집마감');
  });
});
