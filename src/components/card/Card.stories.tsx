import type { Meta } from '@storybook/react';
import SimpleCard from './SimpleCard';
import FullCard from './FullCard';
import {
  mockMeeting,
  mockFullMeeting,
  mockPastMeeting,
  mockCanceledMeeting,
  mockPastFullMeeting,
  mockCanceledFullMeeting,
} from './mock';

// 메타 정보에서 argTypes 제거
const meta = {
  title: 'Components/Card',
  component: SimpleCard,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof SimpleCard>;

export default meta;

// 각 스토리를 직접 함수로 정의
export const SimpleMobile = () => (
  <div className="w-[360px]">
    <SimpleCard meeting={mockMeeting} />
  </div>
);

export const SimpleDesktop = () => (
  <div className="w-[1000px]">
    <SimpleCard meeting={mockMeeting} />
  </div>
);

export const FullMobile = () => (
  <div className="w-[360px]">
    <FullCard meeting={mockFullMeeting} />
  </div>
);

export const FullDesktop = () => (
  <div className="w-[1000px]">
    <FullCard meeting={mockFullMeeting} />
  </div>
);

export const SimplePastMobile = () => (
  <div className="w-[360px]">
    <SimpleCard meeting={mockPastMeeting} />
  </div>
);

export const SimplePastDesktop = () => (
  <div className="w-[1000px]">
    <SimpleCard meeting={mockPastMeeting} />
  </div>
);

export const SimpleCanceledMobile = () => (
  <div className="w-[360px]">
    <SimpleCard meeting={mockCanceledMeeting} />
  </div>
);

export const SimpleCanceledDesktop = () => (
  <div className="w-[1000px]">
    <SimpleCard meeting={mockCanceledMeeting} />
  </div>
);

export const FullPastMobile = () => (
  <div className="w-[360px]">
    <FullCard meeting={mockPastFullMeeting} />
  </div>
);

export const FullPastDesktop = () => (
  <div className="w-[1000px]">
    <FullCard meeting={mockPastFullMeeting} />
  </div>
);

export const FullCanceledMobile = () => (
  <div className="w-[360px]">
    <FullCard meeting={mockCanceledFullMeeting} />
  </div>
);

export const FullCanceledDesktop = () => (
  <div className="w-[1000px]">
    <FullCard meeting={mockCanceledFullMeeting} />
  </div>
);

// viewport 설정 추가
SimplePastMobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

SimplePastDesktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

SimpleCanceledMobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

SimpleCanceledDesktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

FullPastMobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

FullPastDesktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};

FullCanceledMobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

FullCanceledDesktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
