import Button from "@/components/Button";
import StepTitle from "@/components/StepTitle";
import React, { Dispatch, SetStateAction } from "react";
interface OverviewProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const Overview = ({ setStep }: OverviewProps) => {
  const standards: { title: string; description: string }[] = [
    {
      title: "Expertice",
      description: "Having exceptional skill, ability, or background",
    },
    {
      title: "Access",
      description: "Giving guests something they couldn’t do on their own",
    },
    {
      title: "Connection",
      description: "Making meaningful interactions happen",
    },
  ];
  return (
    <div>
      <StepTitle title="What we are looking for" />
      <p className="font-roboto font  text-lg lg:text-xl text-[#000000] mt-6 lg:mt-10">
        Experience hosts are passionate locals who can make people feel at home
        while they’re trying something new. They must meet these standards:
      </p>

      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={() => setStep((prev) => prev + 1)}
          label="Continue"
        />
      </div>
      <div className="flex flex-col  space-y-2 lg:space-y-6 px-6 lg:px-20  mt-8 lg:mt-16">
        {standards.map((item) => (
          <h4 className="font-roboto text-xl text-[#000000]">
            <span className="font-bold text-blue-950/70">{item.title}:</span>
            {item.description}
          </h4>
        ))}
      </div>

      <p className="font-roboto font  text-lg lg:text-xl text-[#000000] mt-6 lg:mt-10">
        Let’s go over them together in more detail.
      </p>
    </div>
  );
};

export default Overview;
