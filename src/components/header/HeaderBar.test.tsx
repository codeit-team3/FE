import { render, screen } from '@testing-library/react';
import HeaderBar from './HeaderBar';
import '@testing-library/jest-dom';
import { NAV_ITEMS } from '@/constants/navigation';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/exchange'),
}));

describe('HeaderBar 컴포넌트 테스트', () => {
  beforeEach(() => {
    render(<HeaderBar />);
  });

  describe('네비게이션 링크', () => {
    it('NAV_ITEMS의 모든 링크가 올바르게 렌더링되어야 한다', () => {
      NAV_ITEMS.forEach((item) => {
        const linkElement = screen.getByRole('link', { name: item.label });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', item.href);
      });
    });

    it('로그인 링크가 올바르게 렌더링되어야 한다', () => {
      const loginLink = screen.getByRole('link', { name: '로그인' });
      expect(loginLink).toBeInTheDocument();
      expect(loginLink).toHaveAttribute('href', '/login');
    });

    it('bookco 링크는 항상 활성화되어야 한다', () => {
      const bookcoItem = NAV_ITEMS.find((item) => item.id === 'bookco');
      const bookcoLink = screen.getByRole('link', { name: bookcoItem!.label });
      expect(bookcoLink).toHaveClass('font-bold');
    });

    it('현재 경로와 일치하는 링크는 활성화되어야 한다', () => {
      const exchangeItem = NAV_ITEMS.find((item) => item.id === 'exchange');
      const exchangeLink = screen.getByRole('link', {
        name: exchangeItem!.label,
      });
      expect(exchangeLink).toHaveClass('font-bold');
    });

    it('현재 경로와 일치하지 않는 링크는 비활성화되어야 한다', () => {
      const bookclubItem = NAV_ITEMS.find((item) => item.id === 'bookclub');
      const bookclubLink = screen.getByRole('link', {
        name: bookclubItem!.label,
      });
      expect(bookclubLink).toHaveClass('text-green-light');
    });
  });
});
