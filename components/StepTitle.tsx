import React from "react";
interface StepTitleProps {
  title: string;
}
const StepTitle = ({ title }: StepTitleProps) => {
  return (
    <div className="font-roboto font-bold text-xl lg:text-3xl text-[#686868]">
      {title}
    </div>
  );
};

export default StepTitle;
