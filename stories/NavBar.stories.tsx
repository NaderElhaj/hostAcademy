import Navbar from "@/components/Navbar/Navbar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const PrimaryButton: Story = {
  args: {
    currentStep: 0,
  },
};
