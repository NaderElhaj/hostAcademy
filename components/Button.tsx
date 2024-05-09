import { classNames } from "@/utils/ClassNames";
import Link from "next/link";
import React, { ReactElement } from "react";
interface ButtonProps {
  label: string;
  link?: string;
  shadowed?: boolean;
  icon?: ReactElement | undefined;
  fullWidth?: boolean;
  backgroundColor: "orange" | "white" | "gray";
  fontSize: "small" | "medium" | "large";
  classes?: string;
  handleClick?: () => void;
  textColor: "black" | "white";
  textCenter?: boolean;
}
const Button = ({
  label,
  fullWidth,
  icon,
  link,
  shadowed,
  backgroundColor,
  fontSize,
  classes,
  handleClick,
  textColor,
  textCenter,
}: ButtonProps) => {
  function getColorCode(color: "orange" | "white" | "gray") {
    switch (color) {
      case "orange":
        return "bg-[#FFAF20]";
      case "white":
        return "bg-[#FFFFFF]";
      case "gray":
        return "bg-[#808080]";
    }
  }
  function getTextColor(color: "white" | "black") {
    switch (color) {
      case "black":
        return "text-[#000000]";
      case "white":
        return "text-[#444444]";
    }
  }
  function getFontSize(fontSize: "small" | "medium" | "large") {
    switch (fontSize) {
      case "small":
        return "text-[20px]";
      case "medium":
        return "text-[23px]";
      case "large":
        return "text-[25px]";
    }
  }
  const DefaultClassNames = "rounded-[10px] px-6 py-[10px]";
  const textClassNames = `${getFontSize(fontSize)} ${getTextColor(textColor)}`;
  const backgroundColorClassNames = `${getColorCode(backgroundColor)}`;
  return (
    <>
      <div className="py-6 px-4">
        {link && (
          <Link
            href={link}
            className={classNames(
              DefaultClassNames,
              textClassNames,
              backgroundColorClassNames,
              classes,
              "",
              fullWidth === true && "w-full",
              shadowed === true && "shadow-black/25  shadow-lg"
            )}
          >
            {label}
          </Link>
        )}
        {handleClick && (
          <button
            className={classNames(
              DefaultClassNames,
              textClassNames,
              backgroundColorClassNames,
              classes,
              fullWidth === true && "w-full",
              shadowed === true && "shadow-black/25 shadow-lg",
              icon && "flex items-center  ",
              ""
            )}
            onClick={handleClick}
          >
            {icon && icon}
            <span className={classNames(textCenter && "pl-4")}>{label}</span>
          </button>
        )}
      </div>
    </>
  );
};

export default Button;
