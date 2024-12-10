import type { Meta, StoryObj } from '@storybook/react';
import FullCard from './FullCard';
import { mockFullMeeting } from '../mock/mock';

const meta = {
  title: 'Components/Card/FullCard',
  component: FullCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    meeting: {
      control: 'object',
      description:
        '모임 정보 (meetingInfo, participationStatus, imageInfo, hostInfo 등)',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
} satisfies Meta<typeof FullCard>;

export default meta;
type Story = StoryObj<typeof FullCard>;

export const Default: Story = {
  args: {
    meeting: mockFullMeeting,
  },
  render: (args) => (
    <div className="w-[344px] md:w-[1000px]">
      <FullCard {...args} />
    </div>
  ),
};

export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  render: (args) => (
    <div className="w-[344px]">
      <FullCard {...args} />
    </div>
  ),
};

export const Desktop: Story = {
  ...Default,
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
  render: (args) => (
    <div className="w-[1000px]">
      <FullCard {...args} />
    </div>
  ),
};
