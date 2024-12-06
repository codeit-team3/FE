import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ParticipantCounter from './ParticipantCounter';

describe('ParticipantCounter', () => {
  it('참가자 수가 올바르게 표시되는지 확인', () => {
    render(<ParticipantCounter current={5} max={20} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('5/20');
  });

  it('기본 상태일 때 색상이 올바르게 적용되는지 확인', () => {
    render(<ParticipantCounter current={5} max={20} isPast={false} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');

    expect(icon).toHaveClass('text-green-normal');
    expect(count.firstChild).toHaveClass('text-green-normal');
    expect(count.lastChild).toHaveClass('text-gray-dark');
  });

  it('정원이 다 찼을 때 모든 요소가 동일한 색상인지 확인', () => {
    render(<ParticipantCounter current={20} max={20} isPast={false} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');

    expect(icon).toHaveClass('text-green-normal');
    expect(count.firstChild).toHaveClass('text-green-normal');
    expect(count.lastChild).toHaveClass('text-green-normal');
  });

  it('지난 모임일 때 색상이 올바르게 적용되는지 확인', () => {
    render(<ParticipantCounter current={15} max={20} isPast={true} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');

    expect(icon).toHaveClass('text-gray-darker');
    expect(count.firstChild).toHaveClass('text-gray-darker');
    expect(count.lastChild).toHaveClass('text-gray-dark');
  });

  it('지난 모임이면서 정원이 다 찼을 때 모든 요소가 동일한 색상인지 확인', () => {
    render(<ParticipantCounter current={20} max={20} isPast={true} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');

    expect(icon).toHaveClass('text-gray-darker');
    expect(count.firstChild).toHaveClass('text-gray-darker');
    expect(count.lastChild).toHaveClass('text-gray-darker');
  });
});
