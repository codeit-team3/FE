import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    componentSubtitle: '진행률을 시각적으로 표시하는 프로그레스바 컴포넌트',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percentage: 25,
  },
  parameters: {
    docs: {
      description: {
        story: '기본 상태의 프로그레스바입니다.',
      },
    },
  },
};

export const Past: Story = {
  args: {
    percentage: 75,
    isPast: true,
  },
  parameters: {
    docs: {
      description: {
        story: '지난 모임의 프로그레스바는 회색으로 표시됩니다.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    percentage: 50,
    color: 'bg-blue-500',
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 색상을 적용할 수 있습니다.',
      },
    },
  },
};

export const WithContainer: Story = {
  args: {
    percentage: 75,
  },
  render: (args) => (
    <div className="w-64">
      <ProgressBar {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '컨테이너의 너비에 맞춰 반응형으로 동작합니다.',
      },
    },
  },
};

export const AllStates: Story = {
  args: {
    percentage: 25,
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="mb-2 text-sm text-gray-dark">기본 상태</p>
        <ProgressBar percentage={25} />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-dark">지난 모임</p>
        <ProgressBar percentage={75} isPast={true} />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-dark">커스텀 색상</p>
        <ProgressBar percentage={50} color="bg-blue-500" />
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
