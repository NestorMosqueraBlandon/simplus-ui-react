import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Headings";

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Heading> = {
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Large: Story = {
  args: { size: "large" },
  render: (args) => (
    <Heading {...args}>An Open-Source Toolbox to make your life easier</Heading>
  ),
};
export const Medium: Story = {
  args: { size: "medium" },
  render: (args) => (
    <Heading {...args}>An Open-Source Toolbox to make your life easier</Heading>
  ),
};
export const Default: Story = {
  args: {},
  render: (args) => (
    <Heading {...args}>An Open-Source Toolbox to make your life easier</Heading>
  ),
};
