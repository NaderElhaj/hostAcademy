import React from "react";
interface TitleBannerWithBulletsProps {
  title: string;
  descritpion: string;
  bullets: string[];
}
const TitleBannerWithBullets = ({
  bullets,
  descritpion,
  title,
}: TitleBannerWithBulletsProps) => {
  return (
    <div className="py-3 px-4 lg:px-11 rounded-lg bg-[#f1f1f1] ">
      <p className="font-roboto text-[#000000] text-sm lg:text-lg mt-3 ">
        {descritpion}
      </p>
      <div className="flex flex-col space-y-2 px-8 lg:px-14 xl:px-28">
        {bullets.map((bullet, index) => (
          <div className="flex space-x-2 items-center">
            <div className=" bg-[#10455B] rounded-full w-4 h-4" />
            <span className="font-roboto text-[#000000] text-xl">{bullet}</span>
          </div>
        ))}
      </div>
      <p className="font-roboto text-[#000000] text-sm lg:text-lg mt-3 ">
        {title}
      </p>
    </div>
  );
};

export default TitleBannerWithBullets;
