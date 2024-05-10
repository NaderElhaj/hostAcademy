import React from "react";
interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  handleChange: any;
}
const OutlinedTextInput = ({
  handleChange,
  label,
  placeholder,
  value,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <p className="font-roboto text-[#000000]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className=" mt-3 w-full bg-[#ffffff] rounded-lg px-5 py-[15px] outline-none    text-[#8c8ca1] font-medium font-roboto placeholder:text-[#8c8ca1] placeholder:font-medium placeholder:font-roboto border border-[#686868]"
      />
    </div>
  );
};

export default OutlinedTextInput;
