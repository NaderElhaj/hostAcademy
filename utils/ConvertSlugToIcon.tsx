import AnimalThemeIcon from "@/components/assets/AnimalThemeIcon";
import ArtThemeIcon from "@/components/assets/ArtThemeIcon";
import CultureThemeIcon from "@/components/assets/CultureThemeIcon";
import DrinkThemeIcon from "@/components/assets/DrinkThemeIcon";
import EntertaimentThemeIcon from "@/components/assets/EntertaimentThemeIcon";
import FoodThemeIcon from "@/components/assets/FoodThemeIcon";
import HistoryThemeIcon from "@/components/assets/HistoryThemeIcon";
import NatureThemeIcon from "@/components/assets/NatureThemeIcon";
import ShoppingThemeIcon from "@/components/assets/ShoppingThemeIcon";
import SportsThemeIcon from "@/components/assets/SportsThemeIcon";
import WellnessThemeIcon from "@/components/assets/WellnessThemeIcon";
import { ThemeIconName } from "@/constant/themesList";

export const ConvertSlugToIcon = (slug: ThemeIconName) => {
  switch (slug) {
    case "animals":
      return <AnimalThemeIcon />;
    case "art":
      return <ArtThemeIcon />;
    case "culture":
      return <CultureThemeIcon />;
    case "drink":
      return <DrinkThemeIcon />;
    case "entertainment":
      return <EntertaimentThemeIcon />;
    case "food":
      return <FoodThemeIcon />;
    case "history":
      return <HistoryThemeIcon />;
    case "nature":
      return <NatureThemeIcon />;
    case "shopping":
      return <ShoppingThemeIcon />;
    case "sports":
      return <SportsThemeIcon />;
    case "wellness":
      return <WellnessThemeIcon />;
  }
};
