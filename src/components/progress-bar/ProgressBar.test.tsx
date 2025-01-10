import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('프로그레스바의 percentage가 올바르게 전달되는지 확인', () => {
    render(<ProgressBar percentage={25} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '25');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('프로그레스바의 너비가 percentage로 채워지는지 확인', () => {
    render(<ProgressBar percentage={25} />);
    const fillBar = screen.getByRole('progressbar').children[0];
    expect(fillBar).toHaveStyle({ width: '25%' });
  });

  it('percentage가 100을 초과할 경우 100%로 제한되는지 확인', () => {
    render(<ProgressBar percentage={150} />);
    const progressbar = screen.getByRole('progressbar');
    const fillBar = progressbar.children[0];

    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
    expect(fillBar).toHaveStyle({ width: '100%' });
  });
});
