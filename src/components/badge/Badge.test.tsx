import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Badge from './Badge';

describe('Badge', () => {
  it('숫자가 1000 이상일 때 999+로 표시된다', () => {
    render(<Badge count={1000} />);
    expect(screen.getByText('999+')).toBeInTheDocument();
  });

  it('숫자가 1000 미만일 때 실제 숫자가 표시된다', () => {
    render(<Badge count={999} />);
    expect(screen.getByText('999')).toBeInTheDocument();
  });

  it('variant가 dot일 때는 숫자가 표시되지 않는다', () => {
    render(<Badge variant="dot" count={5} />);
    expect(screen.queryByText('5')).not.toBeInTheDocument();
  });
});
