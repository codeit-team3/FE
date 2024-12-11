import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import '@testing-library/jest-dom';

describe('Card', () => {
  describe('Card.Box', () => {
    it('onClick 핸들러가 호출되어야 함', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Card>
          <Card.Box onClick={handleClick}>내용</Card.Box>
        </Card>,
      );

      await user.click(screen.getByText('내용'));
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Card.Image', () => {
    it('좋아요 버튼 클릭 시 onLikeClick이 호출되어야 함', async () => {
      const user = userEvent.setup();
      const handleLikeClick = jest.fn();

      render(
        <Card>
          <Card.Image
            url="/test.jpg"
            isLiked={false}
            onLikeClick={handleLikeClick}
          />
        </Card>,
      );

      await user.click(screen.getByRole('button', { name: '좋아요' }));
      expect(handleLikeClick).toHaveBeenCalled();
    });

    it('좋아요 상태에 따라 적절한 aria-label이 표시되어야 함', () => {
      const { rerender } = render(
        <Card>
          <Card.Image url="/test.jpg" isLiked={false} onLikeClick={() => {}} />
        </Card>,
      );

      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        '좋아요',
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-pressed',
        'false',
      );

      rerender(
        <Card>
          <Card.Image url="/test.jpg" isLiked={true} onLikeClick={() => {}} />
        </Card>,
      );

      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        '좋아요 취소',
      );
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-pressed',
        'true',
      );
    });
  });

  describe('Card.Host', () => {
    it('호스트 프로필 클릭 시 onClick이 호출되어야 함', async () => {
      const user = userEvent.setup();
      const handleClick = jest.fn();

      render(
        <Card>
          <Card.Host nickname="호스트" onClick={handleClick} />
        </Card>,
      );

      await user.click(screen.getByRole('img'));
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Card.EndedOverlay', () => {
    it('isCanceled가 true일 때만 오버레이가 표시되어야 함', () => {
      const { rerender } = render(
        <Card isCanceled={false}>
          <Card.EndedOverlay onDelete={() => {}} />
        </Card>,
      );

      expect(
        screen.queryByText(/호스트가 모임을 취소했어요/),
      ).not.toBeInTheDocument();

      rerender(
        <Card isCanceled={true}>
          <Card.EndedOverlay onDelete={() => {}} />
        </Card>,
      );

      expect(
        screen.getByText(/호스트가 모임을 취소했어요/),
      ).toBeInTheDocument();
    });

    it('삭제하기 버튼 클릭 시 onDelete가 호출되어야 함', async () => {
      const user = userEvent.setup();
      const handleDelete = jest.fn();

      render(
        <Card isCanceled={true}>
          <Card.EndedOverlay onDelete={handleDelete} />
        </Card>,
      );

      await user.click(screen.getByText('삭제하기'));
      expect(handleDelete).toHaveBeenCalled();
    });

    it('삭제하기 버튼 클릭 시 이벤트 전파가 중단되어야 함', async () => {
      const user = userEvent.setup();
      const handleDelete = jest.fn();
      const handleCardClick = jest.fn();

      render(
        <Card isCanceled={true} onClick={handleCardClick}>
          <Card.EndedOverlay onDelete={handleDelete} />
        </Card>,
      );

      await user.click(screen.getByText('삭제하기'));
      expect(handleDelete).toHaveBeenCalled();
      expect(handleCardClick).not.toHaveBeenCalled();
    });
  });
});
