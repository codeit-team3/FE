import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatBubble from './ChatBubble';
import userEvent from '@testing-library/user-event';

describe('ChatBubble', () => {
  describe('ME 타입 채팅', () => {
    const meProps = {
      variant: 'ME' as const,
      props: {
        content: '안녕하세요',
        time: '12:34',
      },
    };

    it('메시지 내용과 시간이 표시되어야 한다', () => {
      render(<ChatBubble {...meProps} />);

      expect(screen.getByText('안녕하세요')).toBeInTheDocument();
      expect(screen.getByText('12:34')).toBeInTheDocument();
    });

    it('시간이 없는 경우에도 정상적으로 렌더링되어야 한다', () => {
      render(<ChatBubble variant="ME" props={{ content: '안녕하세요' }} />);

      expect(screen.getByText('안녕하세요')).toBeInTheDocument();
      expect(screen.queryByText('12:34')).not.toBeInTheDocument();
    });
  });

  describe('OPPONENT 타입 채팅', () => {
    const mockOnClick = jest.fn();
    const opponentProps = {
      variant: 'OPPONENT' as const,
      props: {
        content: '반갑습니다',
        time: '12:35',
        name: '김철수',
        profileImage: 'https://via.placeholder.com/150',
        isHost: true,
        onProfileClick: mockOnClick,
      },
    };

    it('메시지, 시간, 이름, 호스트 뱃지가 표시되어야 한다', () => {
      render(<ChatBubble {...opponentProps} />);

      expect(screen.getByText('반갑습니다')).toBeInTheDocument();
      expect(screen.getByText('12:35')).toBeInTheDocument();
      expect(screen.getByText('김철수')).toBeInTheDocument();
      expect(screen.getByTestId('host-icon')).toBeInTheDocument();
    });

    it('프로필 이미지 클릭시 onProfileClick이 호출되어야 한다', async () => {
      const user = userEvent.setup();
      render(<ChatBubble {...opponentProps} />);

      await user.click(screen.getByTestId('profile-image'));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
