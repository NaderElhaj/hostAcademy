import SearchBar from "@/components/SearchBar";
import TitleBanner from "@/components/TitleBanner";
import TitleBannerWithBullets from "@/components/TitleBannerWithBullets";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TitleBannerWithBullets> = {
  title: "Components/TitleBannerWithBullets",
  component: TitleBannerWithBullets,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TitleBannerWithBullets>;

export const TitleBannerWithBulletsPrimary: Story = {
  args: {
    bullets: ["aaaaaaaaaaa", "aaaaaaaaaa", "aaaaaaaaaaa"],
    descritpion: "This is description",
    title: "this is  title",
  },
};
