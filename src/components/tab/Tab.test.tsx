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
        tabType="MAIN_TAB"
      />,
    );

    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('탭 클릭시 onTabChange가 호출되어야 한다', () => {
    render(
      <Tab
        items={items}
        activeTab="탭1"
        onTabChange={mockOnTabChange}
        tabType="MAIN_TAB"
      />,
    );

    const secondTab = screen.getByText('탭2');
    fireEvent.click(secondTab);

    expect(mockOnTabChange).toHaveBeenCalledWith('탭2');
  });
});
