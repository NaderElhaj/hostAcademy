import Button from "@/components/Button";
import WellnessThemeIcon from "@/components/assets/WellnessThemeIcon";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    backgroundColor: "orange",
    label: "Label",
    fontSize: "medium",
    handleClick: () => console.log("Clicked"),
    textColor: "black",
    icon: <WellnessThemeIcon />,
  },
};
