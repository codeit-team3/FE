import type { Meta, StoryObj } from '@storybook/react';
import ParticipantCounter from './ParticipantCounter';

const meta = {
  title: 'Components/ParticipantCounter',
  component: ParticipantCounter,
  parameters: {
    componentSubtitle: '참가자 수를 표시하는 컴포넌트',
  },
} satisfies Meta<typeof ParticipantCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: 5,
    max: 20,
  },
};

export const Full: Story = {
  args: {
    current: 20,
    max: 20,
  },
  parameters: {
    docs: {
      description: {
        story: '정원이 다 찼을 때는 아이콘과 텍스트 색상이 변경됩니다.',
      },
    },
  },
};

export const Overflow: Story = {
  args: {
    current: 25,
    max: 20,
  },
  render: (args) => (
    <div>
      <p className="mb-2 text-sm text-gray-600">
        * 참가자 수가 최대값을 초과하면 최대값으로 표시됩니다 (25 → 20)
      </p>
      <ParticipantCounter {...args} />
    </div>
  ),
};
