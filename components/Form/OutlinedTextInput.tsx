import { classNames } from "@/utils/ClassNames";
import React from "react";
interface TextInputProps {
  label?: string;
  placeholder?: string;
  value: string;
  handleChange: any;
  error?: string;
  description?: string;
  type?: "text" | "number" | "date" | "tel";
  minWidth?: boolean;
  hasShadow?: boolean;
}
const OutlinedTextInput = ({
  handleChange,
  label,
  placeholder,
  value,
  error,
  description,
  type,
  minWidth,
  hasShadow,
}: TextInputProps) => {
  return (
    <div className={`  ${minWidth ? "flex justify-center" : "w-full"} py-2 `}>
      {label && (
        <p className="font-roboto text-[#000000] text-[22px] font-bold">
          {label}
        </p>
      )}
      {description && (
        <p className="font-roboto text-[#000000] text-[20px] font-regular">
          {description}
        </p>
      )}
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={classNames(
          ` mt-3 ${minWidth ? "" : "w-full"}  bg-[#ffffff] rounded-lg px-5 py-[15px] outline-none    text-[#8c8ca1] font-medium font-roboto placeholder:text-[#8c8ca1] placeholder:font-medium placeholder:font-roboto border border-[#686868]`,
          hasShadow && "shadow-md shadow-black/40"
        )}
      />

      {error && <p className={"text-red-500"}>{error}</p>}
    </div>
  );
};

export default OutlinedTextInput;
