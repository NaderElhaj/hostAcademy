import SearchBar from "@/components/SearchBar";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchBar> = {
  title: "Components/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const PrimaryButton: Story = {
  args: {},
};
