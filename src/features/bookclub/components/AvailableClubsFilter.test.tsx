import { render, screen, fireEvent } from '@testing-library/react';
import AvailableClubsFilter from './AvailableClubsFilter';

describe('AvailableClubsFilter 컴포넌트', () => {
  it('체크박스가 정상적으로 렌더링되고, 기본적으로 체크되지 않은 상태이다', () => {
    render(<AvailableClubsFilter checked={false} onChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('신청 가능');

    expect(checkbox).toHaveClass('border-gray-normal-hover');
    expect(label).toHaveClass('font-gray-dark-hover');
    expect(checkbox).not.toBeChecked();
  });

  it('체크박스를 클릭하면 체크 상태와 스타일이 변경된다', () => {
    const mockOnChange = jest.fn();
    render(<AvailableClubsFilter checked={false} onChange={() => {}} />);

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('신청 가능');

    expect(checkbox).toHaveClass('border-gray-normal-hover');
    expect(label).toHaveClass('font-gray-dark-hover');

    fireEvent.click(checkbox);
    expect(checkbox).toHaveClass('green-normal');
    expect(label).toHaveClass('green-normal');
    expect(mockOnChange).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(false);
    expect(checkbox).toHaveClass('border-gray-normal-hover');
    expect(label).toHaveClass('font-gray-dark-hover');
  });
});