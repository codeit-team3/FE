import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import SimpleCard from './SimpleCard';
import FullCard from './FullCard';
import { mockCanceledMeeting, mockMeeting, mockFullMeeting } from './mock';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// SimpleCard - 기본 모임 (모바일)
export const SimpleMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="w-[360px]">
      <SimpleCard meeting={mockMeeting} />
    </div>
  ),
};

// SimpleCard - 기본 모임 (데스크톱)
export const SimpleDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className="w-[1000px]">
      <SimpleCard meeting={mockMeeting} />
    </div>
  ),
};

// SimpleCard - 취소된 모임 (모바일)
export const SimpleCanceledMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="w-[360px]">
      <SimpleCard meeting={mockCanceledMeeting} />
    </div>
  ),
};

// SimpleCard - 취소된 모임 (데스크톱)
export const SimpleCanceledDesktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div className="w-[1000px]">
      <SimpleCard meeting={mockCanceledMeeting} />
    </div>
  ),
};

// FullCard 스토리들
export const FullMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  render: () => (
    <div className="w-[360px]">
      <FullCard meeting={mockFullMeeting} />
    </div>
  ),
};
