import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => {
  // MSW 서버 시작
  server.listen();
});

afterEach(() => {
  // 각 테스트 후 핸들러 리셋
  server.resetHandlers();
});

afterAll(() => {
  // 테스트 완료 후 서버 종료
  server.close();
});
