import React from "react";
interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  handleChange: any;
  type?: "text" | "number" | "date" | "tel";
  name: string;
  error?: string;
}
const TextInput = ({
  handleChange,
  label,
  placeholder,
  value,
  type,
  name,
  error,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <p className="font-roboto text-[#868686]">{label}</p>
      <input
        type={type || "text"}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className=" mt-3 w-full bg-[#ecf1f4] rounded-lg px-5 py-[15px] outline-none  shadow-[#4A4A68]/20 shadow-inner text-[#8c8ca1] font-medium font-roboto placeholder:text-[#8c8ca1] placeholder:font-medium placeholder:font-roboto"
        name={name}
      />
      {error && <p className={"text-red-500"}>{error}</p>}
    </div>
  );
};

export default TextInput;
