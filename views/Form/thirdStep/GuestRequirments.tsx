"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import RadioInput from "@/components/Form/RadioInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { radioHandleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface GuestRequirmentsProps {
  setState: Dispatch<
    SetStateAction<{
      minimumAge: string;
      accessibilty: string;
      activityLevel: string;
      skillLevel: string;
    }>
  >;
  setStep: Dispatch<SetStateAction<number>>;
}
const GuestRequirments = ({ setState, setStep }: GuestRequirmentsProps) => {
  const accessibilties = [
    "Communication accessibility features This is how you communicate with guests on your experience.",
    "Environmental accessibility features These are the attributes of the location of your experience",
    "Other accessibility features",
  ];
  const activityLevels = ["Light", "Moderate", "Strenous", "Extreme"];
  const skillLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];
  const [minimumAge, setMinimumAge] = useState();
  const [accessibilty, setAccessibilty] = useState();
  const [activityLevel, setActivityLevel] = useState();
  const [skillLevel, setSkillLevel] = useState();
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    minimumAge: yup.number().required("This Field is Required"),
    accessibilty: yup.number().required("This Field is Required"),
    activityLevel: yup.number().required("This Field is Required"),
    skillLevel: yup.number().required("This Field is Required"),
  });
  const formData = {
    minimumAge,
    accessibilty,
    activityLevel,
    skillLevel,
  };
  const stringForm = {
    minimumAge,
    accessibilty: accessibilty && accessibilties[accessibilty],
    activityLevel: activityLevel && activityLevel[activityLevel],
    skillLevel: skillLevel && skillLevels[skillLevel],
  };
  console.log(errors);
  return (
    <div>
      <StepTitle title="Who can atted your experience?" />
      <div className="mt-4">
        <TitleBanner
          title="Tips"
          descritpion="Keep in mind that someone booking your experience might book spots for other guests. If there are strict requirements around age, skill level, or certifications, include them here
"
        />
      </div>
      <h2 className="font-roboto font-bold text-2xl text-black mt-8">
        Minimum age
      </h2>
      <p className="font-roboto text-xl text-black">
        Set age limits for guests. Minors can only attend with their legal
        guardian.
      </p>
      <div className="mx-auto w-full">
        <OutlinedTextInput
          value={minimumAge}
          minWidth
          handleChange={(e) => setMinimumAge(e)}
          type="number"
          hasShadow
          error={errors.minimumAge}
        />
      </div>
      <div className="mx-11 mt-10 space-y-5">
        <RadioInput
          handleChange={setAccessibilty}
          options={accessibilties}
          label="Does your experience have any accessibility features?"
          description="Select all the features you provide, and ensure everything is accurate and up to date."
          selectedOption={accessibilty}
          error={errors.accessibilty}
        />
        <RadioInput
          handleChange={setActivityLevel}
          options={activityLevels}
          label="What activity level should people expect?"
          description="Think about how active people will get during experience"
          selectedOption={activityLevel}
          error={errors.activityLevel}
        />
        <RadioInput
          handleChange={setSkillLevel}
          options={skillLevels}
          label="What skill level is required?"
          description="Think about how experienced people should be to take your activity"
          selectedOption={skillLevel}
          error={errors.skillLevel}
        />
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={(e) =>
            radioHandleSubmit(
              e,
              formData,
              schema,
              setState,
              setStep,
              stringForm,
              setErrors
            )
          }
          label="Continue"
        />
      </div>
    </div>
  );
};

export default GuestRequirments;
