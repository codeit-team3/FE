import { render, screen } from '@testing-library/react';
import SortingButton from './SortingButton';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('SortingButton', () => {
  const mockOnClickSorting = jest.fn();

  it('마감임박순 Sorting Button 렌더링 확인', async () => {
    render(
      <SortingButton
        variant="byDeadline"
        onClickSorting={mockOnClickSorting}
      />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    //유저가 최초 클릭 시 최신순->마감임박 순으로 전환. 'DEADLINE'으로 onClickSorting 함수 호출
    await userEvent.click(button);
    expect(mockOnClickSorting).toHaveBeenCalledWith('END');
    //유저가 두번째 클릭 시 마감임박->최신순 순으로 전환. 'NEWEST'으로 onClickSorting 함수 호출
    await userEvent.click(button);
    expect(mockOnClickSorting).toHaveBeenCalledWith('DESC');
  });

  it('날짜순 SortingButton 렌더링 확인', async () => {
    render(
      <SortingButton variant="byDate" onClickSorting={mockOnClickSorting} />,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    //유저가 최초 클릭 시 최신순->오래된 순으로 전환. 'OLDEST'으로 onClickSorting 함수 호출
    await userEvent.click(button);
    expect(mockOnClickSorting).toHaveBeenCalledWith('ASC');
    //유저가 두번째 클릭 시 오래된 순->최신순 순으로 전환. 'NEWEST'으로 onClickSorting 함수 호출
    await userEvent.click(button);
    expect(mockOnClickSorting).toHaveBeenCalledWith('DESC');
  });
});
