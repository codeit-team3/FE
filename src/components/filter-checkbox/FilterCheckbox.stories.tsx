import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import FilterCheckbox from './FilterCheckbox';

const meta = {
  title: 'Components/FilterCheckbox',
  component: FilterCheckbox,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FilterCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function FilterCheckboxStory(args) {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };

    return (
      <FilterCheckbox
        {...args}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={handleChange}
      />
    );
  },
  args: {
    label: '신청가능',
    checked: false,
    'aria-label': '신청 가능한 모임 필터',
  },
};
