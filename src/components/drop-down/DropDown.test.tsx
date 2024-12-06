import '@testing-library/jest-dom';
import DropDown from './DropDown';
import { render, screen } from '@testing-library/react';

describe('DropDown', () => {
  it('variant:sorting 일 때 렌더링 확인', () => {
    render(<DropDown variant="sorting" items={['최신순, 오래된순']} />);
    expect(screen.getByRole('button'));
  });
});
