"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar";
import { themesArray } from "@/constant/themesList";
import Button from "../Button";
import { ConvertSlugToIcon } from "@/utils/ConvertSlugToIcon";
interface ThemeDropDown {
  setState: () => Dispatch<SetStateAction<string>>;
  setIsOpen: () => void;
}
const ThemeDropDown = ({ setState, setIsOpen }: ThemeDropDown) => {
  const [theme, setTheme] = useState("");
  const [subTheme, setSubTheme] = useState("");
  const subArray = themesArray.find((item) => item.label === theme)?.childArray;

  return (
    <div className="flex items-center h-full ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white px-6 lg:px-52  py-10   z-0  rounded-xl"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-roboto font-bold   text-[#000000] text-xl lg:text-3xl">
            All themes
          </h2>
          <SearchBar />
        </div>
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {theme.length === 0 &&
            themesArray.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Button
                  label={item.label}
                  fontSize="medium"
                  textColor="black"
                  backgroundColor="white"
                  fullWidth
                  shadowed
                  icon={ConvertSlugToIcon(item.slug)}
                  handleClick={() => setTheme(item.label)}
                  classes="space-x-4"
                />
              </motion.div>
            ))}
          {theme.length > 0 &&
            (subTheme.length === 0 ||
              subArray.find((item) => !item.childArray)) &&
            subArray.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Button
                  label={item.label}
                  fontSize="medium"
                  textColor="black"
                  backgroundColor="white"
                  fullWidth
                  shadowed
                  handleClick={() => {
                    setSubTheme(item.label);
                    setState(item.label);
                    setIsOpen(false);
                  }}
                  hasNav={item.childArray != undefined}
                  classes="space-x-4"
                />
              </motion.div>
            ))}
          {subTheme &&
            subTheme.length > 0 &&
            subArray.find((item) => item.childArray) &&
            subArray
              .find((item) => item.label === subTheme)
              ?.childArray.map((item) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <Button
                    label={item.label}
                    fontSize="medium"
                    textColor="black"
                    backgroundColor="white"
                    fullWidth
                    shadowed
                    icon={ConvertSlugToIcon(item.slug)}
                    handleClick={() => setTheme(item.label)}
                    classes="space-x-4"
                  />
                </motion.div>
              ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ThemeDropDown;
