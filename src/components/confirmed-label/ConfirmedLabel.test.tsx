import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ConfirmedLabel from './ConfirmedLabel';

describe('ConfirmedLabel', () => {
  it('컴포넌트가 올바르게 렌더링되는지 확인', () => {
    render(<ConfirmedLabel />);
    expect(screen.getByRole('confirmed-text')).toHaveTextContent('개설확정');
  });

  it('visible이 false일 때 컴포넌트가 렌더링되지 않는지 확인', () => {
    render(<ConfirmedLabel visible={false} />);
    expect(screen.queryByRole('confirmed-text')).not.toBeInTheDocument();
  });

  it('visible prop이 없을 때 기본적으로 보이는지 확인', () => {
    render(<ConfirmedLabel />);
    expect(screen.getByRole('confirmed-text')).toBeInTheDocument();
  });
});
