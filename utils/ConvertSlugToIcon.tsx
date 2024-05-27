import AnimalThemeIcon from "@/components/assets/AnimalThemeIcon";
import ArtThemeIcon from "@/components/assets/ArtThemeIcon";
import CultureThemeIcon from "@/components/assets/CultureThemeIcon";
import DrinkThemeIcon from "@/components/assets/DrinkThemeIcon";
import EntertaimentThemeIcon from "@/components/assets/EntertaimentThemeIcon";
import EquipmentsIcon from "@/components/assets/EquipmentsIcon";
import FoodThemeIcon from "@/components/assets/FoodThemeIcon";
import HistoryThemeIcon from "@/components/assets/HistoryThemeIcon";
import NatureThemeIcon from "@/components/assets/NatureThemeIcon";
import ShoppingThemeIcon from "@/components/assets/ShoppingThemeIcon";
import SportsThemeIcon from "@/components/assets/SportsThemeIcon";
import TicketsIcon from "@/components/assets/TicketsIcon";
import TransportationIcon from "@/components/assets/TransportationIcon";
import WellnessThemeIcon from "@/components/assets/WellnessThemeIcon";
import { ProvidedIconName } from "@/constant/providedItem";
import {
  ThemeIconName,
  animals,
  artDesign,
  culturesSociety,
  drink,
  entertaiment,
} from "@/constant/themesList";

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
export const ConvertProvidedSlugToIcon = (slug: ProvidedIconName) => {
  switch (slug) {
    case "drink":
      return <DrinkThemeIcon />;

    case "food":
      return <FoodThemeIcon />;
    case "equipments":
      return <EquipmentsIcon />;
    case "tickets":
      return <TicketsIcon />;
    case "transportation":
      return <TransportationIcon />;
  }
};
