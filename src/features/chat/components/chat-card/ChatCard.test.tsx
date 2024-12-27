import '@testing-library/jest-dom';
import ChatCard from '@/features/chat/components/chat-card/ChatCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockOnClick = jest.fn();

describe('ChatCard Component', () => {
  const user = userEvent.setup();
  const bookClubProps = {
    variant: 'bookClub' as const,
    props: {
      title: '독서 모임 채팅방',
      imageUrl: '/test-image.jpg',
      isHost: false,
      currentParticipants: 5,
      lastMessage: '안녕하세요!',
      lastMessageTime: '오후 2:30',
      unreadCount: 3,
      onClick: mockOnClick,
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('BookClub variant', () => {
    it('채팅방 클릭시 onClick이 호출되어야 함', async () => {
      render(<ChatCard {...bookClubProps} />);

      const chatCard = screen
        .getByRole('heading', { name: '독서 모임 채팅방' })
        .closest('div');
      await user.click(chatCard!);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('unreadCount가 없을 경우 Badge가 렌더링되지 않아야 함', () => {
      render(
        <ChatCard
          {...bookClubProps}
          props={{ ...bookClubProps.props, unreadCount: 0 }}
        />,
      );

      const badges = screen.queryAllByText('3');
      expect(badges).toHaveLength(0);
    });

    it('unreadCount가 있을 경우 Badge가 렌더링되어야 함', () => {
      render(<ChatCard {...bookClubProps} />);

      const badges = screen.getAllByText('3');
      expect(badges).toHaveLength(2);
    });

    it('호스트일 경우 호스트 아이콘이 표시되어야 함', () => {
      render(
        <ChatCard
          {...bookClubProps}
          props={{ ...bookClubProps.props, isHost: true }}
        />,
      );

      const hostIcon = screen.getByTestId('host-icon');
      expect(hostIcon).toBeInTheDocument();
    });
  });

  describe('ChatRoomHeader variant', () => {
    const chatRoomHeaderProps = {
      variant: 'chatRoomHeader' as const,
      props: {
        title: '독서 모임 채팅방',
        imageUrl: '/test-image.jpg',
        isHost: false,
        location: '서울시 강남구',
        datetime: '2024-03-20 14:00',
        meetingType: 'OFFLINE' as const,
        onClick: mockOnClick,
      },
    };

    it('채팅방 헤더 클릭시 onClick이 호출되어야 함', async () => {
      render(<ChatCard {...chatRoomHeaderProps} />);

      const chatHeader = screen
        .getByRole('heading', { name: '독서 모임 채팅방' })
        .closest('div');
      await user.click(chatHeader!);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('호스트일 경우 호스트 아이콘이 표시되어야 함', () => {
      render(
        <ChatCard
          {...chatRoomHeaderProps}
          props={{ ...chatRoomHeaderProps.props, isHost: true }}
        />,
      );

      const hostIcon = screen.getByTestId('host-icon');
      expect(hostIcon).toBeInTheDocument();
    });
  });
});
