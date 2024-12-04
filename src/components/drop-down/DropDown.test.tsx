import '@testing-library/jest-dom';
import DropDown from './DropDown';
import { render, screen } from '@testing-library/react';

describe('DropDown', () => {
  it('variant:navbar 일 때 렌더링 확인', () => {
    render(<DropDown variant="navbar" items={['마이페이지, 로그아웃']} />);
    expect(screen.getByRole('button'));
  });
});
