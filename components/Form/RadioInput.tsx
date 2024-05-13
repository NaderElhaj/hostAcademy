import { classNames } from "@/utils/ClassNames";
import React from "react";
interface RadioInputProps {
  options: string[];
  label: string;
  selectedOption: number | undefined;
  handleChange: (e: any) => void;
  error?: null | string;
}
const RadioInput = ({
  handleChange,
  label,
  error,
  options,
  selectedOption,
}: RadioInputProps) => {
  return (
    <fieldset>
      <legend className="font-roboto text-base font-bold text-[#000000]">
        {label}{" "}
        <span className="font-roboto text-base italic text-[#000000]/30">
          Select one option{" "}
        </span>
      </legend>
      <div className={classNames("mt-2")}>
        {options.map((item, index) => (
          <div className="flex  space-x-2 items-center" key={index}>
            <input
              type="radio"
              value={index}
              checked={selectedOption === index}
              onChange={() => handleChange(index)}
            />
            <label className="font-roboto text-base italic text-[#000000]">
              {item}
            </label>
          </div>
        ))}
      </div>
      {error && <p className={"text-red-500"}>{error}</p>}
    </fieldset>
  );
};

export default RadioInput;
