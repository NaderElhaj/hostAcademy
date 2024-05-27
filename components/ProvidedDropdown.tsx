import React, { Dispatch, SetStateAction, useState } from "react";
import SearchBar from "./SearchBar";
import { providedArray } from "@/constant/providedItem";
import Button from "./Button";
import {
  ConvertProvidedSlugToIcon,
  ConvertSlugToIcon,
} from "@/utils/ConvertSlugToIcon";
interface ThemeDropDown {
  setState: () => Dispatch<SetStateAction<string>>;
  setIsOpen: () => void;
}
const ProvidedDropdown = ({ setIsOpen, setState }: ThemeDropDown) => {
  const [item, setItem] = useState("");
  const [subItem, setSubItem] = useState("");
  const subArray = providedArray.find((it) => it.label === item)?.childArray;

  return (
    <div className="">
      <div className="bg-white px-8  py-10 rounded-2xl">
        <div className="flex items-center justify-between w-full">
          <h2 className="font-roboto font-bold   text-[#000000] text-xl lg:text-3xl">
            All themes
          </h2>
          <SearchBar />
        </div>
        <div className="mt-6   grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {item.length === 0 &&
            providedArray.map((item) => (
              <Button
                fontSize="medium"
                textColor="black"
                shadowed
                backgroundColor="white"
                label={item.label}
                handleClick={() => {
                  setItem(item.label);
                }}
                fullWidth
                icon={ConvertProvidedSlugToIcon(item.slug)}
                classes="space-x-4"
              />
            ))}
          {item.length > 0 &&
            subArray.map((item) => (
              <Button
                fontSize="medium"
                textColor="black"
                shadowed
                backgroundColor="white"
                label={item}
                handleClick={() => {
                  setItem(item);
                  setState(item);
                  setIsOpen(false);
                }}
                fullWidth
                classes="space-x-4"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProvidedDropdown;
