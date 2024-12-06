import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import '@testing-library/jest-dom';

const defaultProps = {
  title: '테스트 모임',
  location: '서울 강남구',
  date: '2024.04.01',
  time: '19:00',
  currentParticipants: 5,
  maxParticipants: 10,
  imageUrl: '/test-image.jpg',
};

describe('Card', () => {
  it('기본 정보가 올바르게 렌더링되어야 함', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText('테스트 모임')).toBeInTheDocument();
    expect(screen.getByText('서울 강남구')).toBeInTheDocument();
    expect(screen.getByText('2024.04.01')).toBeInTheDocument();
    expect(screen.getByText('19:00')).toBeInTheDocument();
  });

  it('클릭 이벤트가 발생하면 onClick 핸들러가 호출되어야 함', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Card {...defaultProps} onClick={handleClick} />);

    const article = screen.getByRole('article');
    await user.click(article);

    expect(handleClick).toHaveBeenCalled();
  });

  it('좋아요 버튼 클릭 시 이벤트 전파가 중단되고 onLikeToggleClick이 호출되어야 함', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const handleLikeToggleClick = jest.fn();

    render(
      <Card
        {...defaultProps}
        onClick={handleClick}
        onLikeToggleClick={handleLikeToggleClick}
      />,
    );

    const likeButton = screen.getByRole('button', { name: /좋아요/i });
    await user.click(likeButton);

    expect(handleLikeToggleClick).toHaveBeenCalled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('참여하기 버튼 클릭 시 이벤트 전파가 중단되고 onJoinClick이 호출되어야 함', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const handleJoinClick = jest.fn();

    render(
      <Card
        {...defaultProps}
        onClick={handleClick}
        onJoinClick={handleJoinClick}
      />,
    );

    const joinButton = screen.getByRole('button', { name: /join now/i });
    await user.click(joinButton);

    expect(handleJoinClick).toHaveBeenCalled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('마감된 상태일 때 오버레이가 표시되어야 함', () => {
    render(<Card {...defaultProps} isEnded={true} />);

    expect(screen.getByText(/마감된 챌린지에요.*다음 기회에 만나요/i));
  });

  it('확정된 상태일 때 확정 라벨이 표시되어야 함', () => {
    render(<Card {...defaultProps} isConfirmed={true} />);

    expect(screen.getByText(/확정/)).toBeInTheDocument();
  });

  it('참가자 수가 올바르게 표시되어야 함', () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByRole('participant-count')).toHaveTextContent('5/10');
  });
});
