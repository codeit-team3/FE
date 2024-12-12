import type { Meta, StoryObj } from '@storybook/react';
import SimpleCard from './SimpleCard';
import { mockMeeting } from '../mock/mock';

const meta = {
  title: 'Components/TMPCard/SimpleCard',
  component: SimpleCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    meeting: {
      control: 'object',
      description: '모임 정보 (meetingInfo, participationStatus, imageInfo 등)',
    },
    className: {
      control: 'text',
      description: '추가 스타일링을 위한 className',
    },
  },
} satisfies Meta<typeof SimpleCard>;

export default meta;
type Story = StoryObj<typeof SimpleCard>;

export const Default: Story = {
  args: {
    meeting: mockMeeting,
  },
  render: (args) => (
    <div className="w-[344px] md:w-[1000px]">
      <SimpleCard {...args} />
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
      <SimpleCard {...args} />
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
      <SimpleCard {...args} />
    </div>
  ),
};
