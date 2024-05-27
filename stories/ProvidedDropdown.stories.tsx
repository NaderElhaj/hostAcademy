import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import ThemeDropDown from "@/components/Form/ThemeDropDown";
import ProvidedDropdown from "@/components/ProvidedDropdown";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProvidedDropdown> = {
  title: "Components/ProvidedDropdown",
  component: ProvidedDropdown,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProvidedDropdown>;

export const ProvidedDropdownStory: Story = {
  args: {},
};
