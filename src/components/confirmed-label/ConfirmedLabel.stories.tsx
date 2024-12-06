import type { Meta, StoryObj } from '@storybook/react';
import ConfirmedLabel from './ConfirmedLabel';

const meta = {
  title: 'Components/ConfirmedLabel',
  component: ConfirmedLabel,
  parameters: {
    componentSubtitle: '개설확정/모집마감 상태를 표시하는 컴포넌트',
  },
} satisfies Meta<typeof ConfirmedLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    variant: 'confirmed',
    isPast: false,
  },
  parameters: {
    docs: {
      description: {
        story: '기본 상태입니다. 개설확정 상태를 초록색으로 표시합니다.',
      },
    },
  },
};

export const Closed: Story = {
  args: {
    visible: true,
    variant: 'closed',
    isPast: false,
  },
  parameters: {
    docs: {
      description: {
        story: '모집마감 상태를 파란색으로 표시합니다.',
      },
    },
  },
};

export const Past: Story = {
  args: {
    visible: true,
    variant: 'confirmed',
    isPast: true,
  },
  parameters: {
    docs: {
      description: {
        story: '지난 모임의 경우 회색으로 표시됩니다.',
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'visible이 false일 경우 컴포넌트가 렌더링되지 않습니다.',
      },
    },
  },
};

export const AllStates: Story = {
  args: {
    visible: true,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ConfirmedLabel variant="confirmed" />
        <span className="text-sm text-gray-dark">개설확정 상태</span>
      </div>
      <div className="flex items-center gap-2">
        <ConfirmedLabel variant="closed" />
        <span className="text-sm text-gray-dark">모집마감 상태</span>
      </div>
      <div className="flex items-center gap-2">
        <ConfirmedLabel variant="confirmed" isPast={true} />
        <span className="text-sm text-gray-dark">지난 모임 (개설확정)</span>
      </div>
      <div className="flex items-center gap-2">
        <ConfirmedLabel variant="closed" isPast={true} />
        <span className="text-sm text-gray-dark">지난 모임 (모집마감)</span>
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
