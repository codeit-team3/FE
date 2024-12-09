import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterCheckbox from './FilterCheckbox';

describe('FilterCheckbox 컴포넌트', () => {
  it('체크 상태에 따라 올바른 스타일이 적용된다', () => {
    const { rerender } = render(
      <FilterCheckbox label="신청가능" checked={false} onChange={() => {}} />,
    );

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('신청가능');

    expect(checkbox).toHaveClass('border-gray-dark-02');
    expect(label).toHaveClass('text-gray-dark-02');
    expect(checkbox).not.toBeChecked();

    rerender(
      <FilterCheckbox label="신청가능" checked={true} onChange={() => {}} />,
    );

    expect(checkbox).toBeChecked();

    checkbox.click();
    expect(checkbox).toHaveClass('checked:border-green-normal-01');
    expect(label).toHaveClass('text-green-normal-01');
  });

  it('체크박스를 클릭하면 onChange 핸들러가 호출된다', () => {
    const mockOnChange = jest.fn();
    render(
      <FilterCheckbox
        label="신청가능"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
