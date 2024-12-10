import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Tab from './Tab';

describe('Tab 컴포넌트', () => {
  const mockOnTabChange = jest.fn();
  const items = ['탭1', '탭2', '탭3'] as const;

  beforeEach(() => {
    mockOnTabChange.mockClear();
  });

  it('모든 탭 아이템이 렌더링되어야 한다', () => {
    render(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="BOOK"
      />,
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('활성화된 탭은 올바른 스타일이 적용되어야 한다', () => {
    render(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="BOOK"
      />,
    );

    const activeTab = screen.getByText('탭1');
    expect(activeTab).toHaveClass('border-green-dark-01', 'text-green-dark-01');
  });

  it('탭 클릭시 onTabChange가 호출되어야 한다', () => {
    render(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="BOOK"
      />,
    );

    const secondTab = screen.getByText('탭2');
    fireEvent.click(secondTab);

    expect(mockOnTabChange).toHaveBeenCalledWith('탭2');
  });

  it('tabType에 따라 올바른 텍스트 크기가 적용되어야 한다', () => {
    const { rerender } = render(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="BOOK"
      />,
    );

    expect(screen.getByText('탭1')).toHaveClass('text-lg');

    rerender(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="CONTENT"
      />,
    );

    expect(screen.getByText('탭1')).toHaveClass('text-xl');
  });
});
