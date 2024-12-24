import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ParticipantCounter from './ParticipantCounter';

describe('ParticipantCounter', () => {
  it('참가자 수가 올바르게 표시되는지 확인', () => {
    render(<ParticipantCounter current={5} max={20} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('5/20');
  });

  it('정원이 다 찼을 때 표시가 올바른지 확인', () => {
    render(<ParticipantCounter current={20} max={20} isPast={false} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('20/20');
  });

  it('지난 모임일 때 표시가 올바른지 확인', () => {
    render(<ParticipantCounter current={15} max={20} isPast={true} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('15/20');
  });

  it('max 값이 없을 때 current만 표시되는지 확인', () => {
    render(<ParticipantCounter current={15} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('15');
    expect(screen.getByRole('participant-count')).not.toHaveTextContent('/');
  });
});
