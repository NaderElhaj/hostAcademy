import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import ThemeDropDown from "@/components/Form/ThemeDropDown";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemeDropDown> = {
  title: "Components/ThemeDropDown",
  component: ThemeDropDown,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ThemeDropDown>;

export const ThemeDropDownStory: Story = {
  args: {},
};
