import '@testing-library/jest-dom';
import DropDown from './DropDown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MENU_ITEMS } from '@/constants';

describe('DropDown variant:navbar 일 때', () => {
  const mockHandleSelectionChange = jest.fn();

  it('드롭다운 버튼 클릭 이벤트로 드롭다운 메뉴 아이템 렌더링 확인', () => {
    render(
      <DropDown
        variant="navbar"
        onChangeSelection={mockHandleSelectionChange}
      />,
    );
    //드롭다운 버튼 렌더링 확인
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    //유저가 드롭다운 클릭 전엔 메뉴 아이템들이 나타나지 않음
    const menuItems = screen.queryByRole('listbox');
    expect(menuItems).not.toBeInTheDocument();

    //유저가 드롭다운 클릭 후엔 메뉴 아이템들이 나타남
    userEvent.click(button);
    expect(menuItems).toBeInTheDocument;
  });

  it('드롭다운 메뉴 아이템 클릭 시 해당 아이템 value 값 반환', async () => {
    const user = userEvent.setup();
    render(
      <DropDown
        variant="navbar"
        onChangeSelection={mockHandleSelectionChange}
      />,
    );

    const button = screen.getByRole('button');
    // await user.click(button);

    // //유저가 드롭다운 클릭 후엔 메뉴 아이템들이 나타남
    // const menuItems = screen.getByRole('listbox');
    // expect(menuItems).toBeInTheDocument();

    //유저가 드롭다운 클릭 전엔 메뉴 아이템들이 나타나지 않음
    const menuItems = screen.queryByRole('listbox');
    expect(menuItems).not.toBeInTheDocument();

    //유저가 드롭다운 클릭 후엔 메뉴 아이템들이 나타남
    userEvent.click(button);
    expect(menuItems).toBeInTheDocument;

    //유저가 메뉴 아이템의 label을 보고 클릭하면 메뉴 아이템의 value값과 handle 함수를 호출
    const menuItem = screen.getByText(MENU_ITEMS['navbar'][0].label);
    await user.click(menuItem);

    expect(mockHandleSelectionChange).toHaveBeenCalledWith(
      MENU_ITEMS['navbar'][0].value,
    );
  });

  it('드롭다운 외부 영역을 클릭했을 때 드롭다운 메뉴가 닫히는지 확인', async () => {
    const user = userEvent.setup();
    render(
      <>
        <DropDown
          variant="navbar"
          onChangeSelection={mockHandleSelectionChange}
        />
        <div>드롭다운 외부 영역</div>
      </>,
    );

    const button = screen.getByRole('button');
    user.click(button);
    expect(button).toBeInTheDocument();

    user.click(screen.getByText('드롭다운 외부 영역'));
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });
});
