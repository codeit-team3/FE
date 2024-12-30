import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from './Loading';

describe('Loading', () => {
  it('로딩 컴포넌트가 정상적으로 렌더링되어야 한다', () => {
    const { getByAltText } = render(<Loading />);
    expect(getByAltText('로딩 중...')).toBeInTheDocument();
  });

  it('fullHeight prop이 정상적으로 전달되어야 한다', () => {
    const { container } = render(<Loading fullHeight={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
