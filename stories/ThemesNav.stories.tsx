import Button from "@/components/Button";
import ThemesNav from "@/components/ThemesNav";
import { themesArray } from "@/constant/themesList";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ThemesNav> = {
  title: "Components/ThemesNav",
  component: ThemesNav,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ThemesNav>;

export const PrimaryButton: Story = {
  args: {
    themes: themesArray,
  },
};
