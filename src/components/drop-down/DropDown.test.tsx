import '@testing-library/jest-dom';
import DropDown from './DropDown';
import { render, screen } from '@testing-library/react';

describe('DropDown', () => {
  it('variant:sorting 일 때 렌더링 확인', () => {
    render(
      <DropDown
        variant="filtering"
        items={[
          { value: 1, label: '온라인' },
          { value: 2, label: '오프라인' },
        ]}
      />,
    );
    expect(screen.getByRole('button'));
  });
});
