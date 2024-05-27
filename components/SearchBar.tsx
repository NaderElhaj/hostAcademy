import React from "react";
import SearchIcon from "./assets/SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex p-[14px] items rounded-2xl border border-[#686868] items-center space-x-[10px] max-w-[400px]">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        className="w-full  bg-transparent border-none outline-none  placeholder:font-roboto  placeholder:font-light placeholder:text-lg placeholder:lg:text-2xl placeholder:text-[#111111] pr-10 lg:pr-20 "
      />
    </div>
  );
};

export default SearchBar;
