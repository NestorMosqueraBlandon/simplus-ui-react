import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Paragraph>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <Paragraph {...args}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui debitis
      molestias eveniet repellendus? Itaque!
    </Paragraph>
  ),
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => <Paragraph {...args}>Team members</Paragraph>,
};
export const OutlineSmall: Story = {
  args: {
    variant: "outline",
    size: "xs",
  },
  render: (args) => <Paragraph {...args}>Team members</Paragraph>,
};
