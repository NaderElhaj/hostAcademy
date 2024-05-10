import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OutlinedTextInput> = {
  title: "Components/OutlinedTextInput",
  component: OutlinedTextInput,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof OutlinedTextInput>;

export const OutlinedTextInputStory: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    value: "Value",
    handleChange: () => console.log("aa"),
  },
};
