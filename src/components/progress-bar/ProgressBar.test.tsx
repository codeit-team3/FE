import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProgressBar, { PROGRESS_COLORS } from './ProgressBar';

describe('ProgressBar', () => {
  it('프로그레스바의 현재값과 최대값이 올바르게 전달되는지 확인', () => {
    render(<ProgressBar current={5} max={20} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '5');
    expect(progressbar).toHaveAttribute('aria-valuemax', '20');
  });

  it('정원이 다 찼을 때 색상이 변경되는지 확인', () => {
    render(<ProgressBar current={20} max={20} />);
    const fillBar = screen.getByRole('progressbar').children[0];
    expect(fillBar).toHaveClass(PROGRESS_COLORS.full);
  });

  it('기본 높이와 radius가 적용되는지 확인', () => {
    render(<ProgressBar current={10} max={20} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveStyle({ height: '4px', borderRadius: '6px' });
  });

  it('커스텀 높이와 radius가 적용되는지 확인', () => {
    render(<ProgressBar current={10} max={20} height={8} borderRadius={8} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveStyle({ height: '8px', borderRadius: '8px' });
  });

  it('프로그레스바의 너비가 계산된 퍼센티지로 채워지는지 확인', () => {
    render(<ProgressBar current={5} max={20} />);
    const fillBar = screen.getByRole('progressbar').children[0];
    expect(fillBar).toHaveStyle({ width: '25%' }); // 5/20 * 100 = 25%
  });

  it('current가 max보다 클 때 너비가 100%를 초과하지 않는지 확인', () => {
    render(<ProgressBar current={25} max={20} />);
    const fillBar = screen.getByRole('progressbar').children[0];
    expect(fillBar).toHaveStyle({ width: '100%' });
  });
});
