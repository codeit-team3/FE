import { render, screen } from '@testing-library/react';
import RadioButtonGroup from './RadioButtonGroup';
import '@testing-library/jest-dom';

jest.mock('@/features/club-create/hooks/useSelectAddress', () => ({
  useSelectAddress: jest.fn(() => ({
    handleRadioChange: jest.fn(),
  })),
}));

describe('RadioButtonGroup', () => {
  const mockRegister = jest.fn();
  const mockSetValue = jest.fn();
  const mockWatch = jest.fn();
  const mockErrors = {};

  const options = [
    { label: '오프라인', value: 'OFFLINE' },
    { label: '온라인', value: 'ONLINE' },
  ];

  it('OFFLINE 선택 시 주소 입력 필드가 표시된다', () => {
    render(
      <RadioButtonGroup
        options={options}
        selectedValue="OFFLINE"
        register={mockRegister}
        addressRegister={mockRegister}
        setValue={mockSetValue}
        name="meetingType"
        watch={mockWatch}
        errors={mockErrors}
      />,
    );

    expect(screen.getByTestId('address-input')).toBeInTheDocument();
  });

  it('OFFLINE이 아닌 옵션 선택 시 주소 입력 필드가 표시되지 않는다', () => {
    render(
      <RadioButtonGroup
        options={options}
        selectedValue="ONLINE"
        register={mockRegister}
        name="meetingType"
        errors={mockErrors}
      />,
    );

    expect(screen.queryByTestId('address-input')).not.toBeInTheDocument();
  });
});
