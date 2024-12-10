import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterCheckbox from './FilterCheckbox';

describe('FilterCheckbox 컴포넌트', () => {
  it('체크박스를 클릭하면 onChange 핸들러가 호출된다', async () => {
    const mockOnChange = jest.fn();
    const { debug } = render(
      <FilterCheckbox
        label="신청가능"
        checked={false}
        onChange={mockOnChange}
      />,
    );

    const checkbox = screen.getByRole('checkbox');

    fireEvent.click(checkbox);
    await waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(checkbox).toBeChecked();
      debug();
    });
  });
});
