import React from "react";
interface TextInputProps {
  label?: string;
  placeholder: string;
  value: string;
  handleChange: any;
  name: string;
  error?: string;
  description?: string;
  hasEstimation?: boolean;
}
const PricingInput = ({
  handleChange,
  label,
  name,
  placeholder,
  value,
  error,
  description,
  hasEstimation,
}: TextInputProps) => {
  return (
    <div className="flex space-x-4 items-center">
      <div className="py-4 px-2">
        <p className="font-roboto text-[#000000] text-[22px] font-bold">
          {label}
        </p>
        <p className="font-roboto text-[#000000]/80 text-[20px] font-regular">
          {description}
        </p>{" "}
        <div className="py-3 px-12 border border-black/60 rounded-xl  w-max shadow-md shadow-black/40 mt-4">
          <div className="flex space-x-2 items-center justify-between">
            <p className="font-roboto text-xl text-[#686868] font-semibold">
              USD
            </p>
            <input
              type="text"
              className="bg-transparent outline-none border-transparent w-20 focus:border-none focus:outline-none text-black  font-roboto font-semibold text-2xl"
              onChange={(e) => handleChange(e.target.value)}
              value={value}
            />
          </div>
        </div>
      </div>
      {hasEstimation && (
        <div className="">
          <p className="max-w-[180px] font-roboto text-[#000000] text-xl ">
            Your estimated earnings
          </p>
          {value && (
            <div className="py-[2px] px-12 bg-[#F1F1F1] rounded-xl mt-5">
              <p className="  font-roboto font-semibold text-xl text-[#686868]">
                USD {value - value / 10}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PricingInput;
