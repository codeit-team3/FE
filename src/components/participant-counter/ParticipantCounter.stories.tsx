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
    isPast: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          '기본 상태입니다. 아이콘과 현재 인원 숫자는 초록색, 최대 인원 숫자는 회색으로 표시됩니다.',
      },
    },
  },
};

export const Full: Story = {
  args: {
    current: 20,
    max: 20,
    isPast: false,
  },
  parameters: {
    docs: {
      description: {
        story: '정원이 다 찼을 때는 모든 숫자가 초록색으로 표시됩니다.',
      },
    },
  },
};

export const Past: Story = {
  args: {
    current: 15,
    max: 20,
    isPast: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '지난 모임의 경우 아이콘과 현재 인원 숫자가 진한 회색으로 표시됩니다.',
      },
    },
  },
};

export const PastAndFull: Story = {
  args: {
    current: 20,
    max: 20,
    isPast: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          '지난 모임이면서 정원이 다 찼을 때는 모든 요소가 진한 회색으로 표시됩니다.',
      },
    },
  },
};

export const AllStates: Story = {
  args: {
    current: 5,
    max: 20,
    isPast: false,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ParticipantCounter current={5} max={20} isPast={false} />
        <span className="text-sm">기본 상태</span>
      </div>
      <div className="flex items-center gap-2">
        <ParticipantCounter current={20} max={20} isPast={false} />
        <span className="text-sm">정원 마감</span>
      </div>
      <div className="flex items-center gap-2">
        <ParticipantCounter current={15} max={20} isPast={true} />
        <span className="text-sm">지난 모임</span>
      </div>
      <div className="flex items-center gap-2">
        <ParticipantCounter current={20} max={20} isPast={true} />
        <span className="text-sm">지난 모임 & 정원 마감</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 상태를 한 번에 보여주는 예시입니다.',
      },
    },
  },
};
