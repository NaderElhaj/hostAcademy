import React from "react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import { Theme } from "@/constant/themesList";
import { ConvertSlugToIcon } from "@/utils/ConvertSlugToIcon";
interface ThemesNavProps {
  themes: Theme[];
}
const ThemesNav = ({ themes }: ThemesNavProps) => {
  return (
    <div className="px-4 lg:px-6 xl:px-[65px] ">
      <div className="flex  justify-between px-8">
        <h2 className="font-roboto font-bold text-xl lg:text-3xl text-[#000000]">
          All themes
        </h2>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 xl:gap-4 lg:grid-cols-2 xl:grid-cols-3 ">
        {themes.map((item) => (
          <Button
            backgroundColor="white"
            label={item.label}
            fontSize="medium"
            handleClick={() => console.log("Clicked")}
            textColor="black"
            icon={item.hasicon ? ConvertSlugToIcon(item.slug) : undefined}
            shadowed
            fullWidth
            textCenter
          />
        ))}
      </div>
    </div>
  );
};

export default ThemesNav;
