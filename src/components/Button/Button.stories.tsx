import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/Button/button";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Go to Page",
  },
};
export const simplusPrimary: Story = {
  args: {
    variant: "simpluPrimary",
    size: "ss",
  },
  render: (args) => <Button {...args}>See more Tools</Button>,
};
export const Outline: Story = {
  args: {
    children: "Go to Page",
    variant: "outline",
  },
};
