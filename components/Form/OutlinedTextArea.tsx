import React from "react";
interface TextInputProps {
  label: string;
  placeholder?: string;
  value: string;
  handleChange: any;
  type?: "text" | "number" | "date";
  error?: string;
  description?: string;
}
const OutlinedTextArea = ({
  handleChange,
  label,
  placeholder,
  value,
  type,
  error,
  description,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <p className="font-roboto text-[#000000] text-[22px] font-bold">
        {label}
      </p>
      <p className="font-roboto text-[#000000] text-[20px] font-regular">
        {description}
      </p>{" "}
      <textarea
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className=" mt-3 w-full bg-[#ffffff] rounded-lg px-5 py-[15px] outline-none    text-[#8c8ca1] font-medium font-roboto placeholder:text-[#8c8ca1] placeholder:font-medium placeholder:font-roboto border border-[#686868]"
        rows={5}
      />
      {error && <p className={"text-red-500"}>{error}</p>}
    </div>
  );
};

export default OutlinedTextArea;
