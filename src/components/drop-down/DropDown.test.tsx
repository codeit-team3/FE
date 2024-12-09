import '@testing-library/jest-dom';
import DropDown from './DropDown';
import { render, screen } from '@testing-library/react';

describe('DropDown', () => {
  it('variant:filtering 일 때 렌더링 확인', () => {
    render(<DropDown variant="onOff" />);
    expect(screen.getByRole('button'));
  });
});
