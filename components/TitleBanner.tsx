import React from "react";
interface TitleBannerProps {
  title: string;
  descritpion: string;
  flex?: boolean; // Make flex optional if it's not always needed
}
const TitleBanner = ({ descritpion, title }: TitleBannerProps) => {
  return (
    <div className="py-3 px-4 rounded-lg bg-[#f1f1f1] ">
      <h2 className="font-roboto font-bold text-xl  text-[#000000]">{title}</h2>
      <p className="font-roboto text-[#000000] text-sm lg:text-base mt-3 ">
        {descritpion}
      </p>
    </div>
  );
};

export default TitleBanner;
