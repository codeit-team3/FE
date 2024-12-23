import ChatCard from '@/components/chat-card/ChatCard';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Mock 함수들
const mockOnClick = jest.fn();
const mockOnDelete = jest.fn();

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
  });

  describe('ChatCard.Image', () => {
    it('이미지가 없을 경우 기본 이미지가 표시되어야 함', () => {
      render(<ChatCard.Image alt="채팅방 이미지" />);

      const image = screen.getByAltText('채팅방 이미지');
      expect(image).toHaveAttribute(
        'src',
        expect.stringContaining('defaultBookClub'),
      );
    });
  });

  describe('ChatCard.Box with Overlay', () => {
    it('취소된 채팅방에서 삭제 버튼 클릭시 onDelete가 호출되어야 함', async () => {
      const props = {
        variant: 'bookClub' as const,
        props: {
          ...bookClubProps.props,
          isCanceled: true,
          onDelete: mockOnDelete,
        },
      };

      render(<ChatCard {...props} />);

      const deleteButton = screen.getByRole('button', { name: '삭제하기' });
      await user.click(deleteButton);

      expect(mockOnDelete).toHaveBeenCalledTimes(1);
    });
  });
});
