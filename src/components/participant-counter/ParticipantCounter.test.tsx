import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ParticipantCounter, { PARTICIPANT_COLORS } from './ParticipantCounter';

describe('ParticipantCounter', () => {
  it('참가자 수가 올바르게 표시되는지 확인', () => {
    render(<ParticipantCounter current={5} max={20} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('5/20');
  });

  it('정원이 다 찼을 때 아이콘과 텍스트 색상이 변경되는지 확인', () => {
    render(<ParticipantCounter current={20} max={20} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');
    expect(icon).toHaveClass(PARTICIPANT_COLORS.full);
    expect(count).toHaveClass(PARTICIPANT_COLORS.full);
  });

  it('정원이 차지 않았을 때 아이콘과 텍스트 기본 색상 확인', () => {
    render(<ParticipantCounter current={15} max={20} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');
    expect(icon).toHaveClass(PARTICIPANT_COLORS.default);
    expect(count).toHaveClass(PARTICIPANT_COLORS.default);
  });

  it('참가자 수가 최대값을 초과할 경우 최대값으로 표시', () => {
    render(<ParticipantCounter current={25} max={20} />);
    expect(screen.getByRole('participant-count')).toHaveTextContent('20/20');
  });

  it('정원이 초과되었을 때도 아이콘과 텍스트 색상이 full 색상인지 확인', () => {
    render(<ParticipantCounter current={25} max={20} />);
    const icon = screen.getByRole('participant-icon');
    const count = screen.getByRole('participant-count');
    expect(icon).toHaveClass(PARTICIPANT_COLORS.full);
    expect(count).toHaveClass(PARTICIPANT_COLORS.full);
  });
});
