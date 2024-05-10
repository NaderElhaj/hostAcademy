import ProfileImageUpload from "@/components/ProfileImageUpload";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileImageUpload> = {
  title: "Components/ProfileImageUpload",
  component: ProfileImageUpload,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ProfileImageUpload>;

export const ProfileImaheUpload: Story = {
  args: {},
};
