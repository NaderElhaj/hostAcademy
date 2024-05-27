"use  client";
import Button from "@/components/Button";
import OutlinedTextArea from "@/components/Form/OutlinedTextArea";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface TitleProps {
  setState: Dispatch<
    SetStateAction<{ description: string; experienceDuration: string }>
  >;
  setStep: Dispatch<SetStateAction<number>>;
}
const WhatWeDo = ({ setState, setStep }: TitleProps) => {
  const [description, setDescription] = useState("");
  const [experienceDuration, setExperienceDuration] = useState("");
  const [errors, setErrors] = useState({});
  const formData = {
    description,
    experienceDuration,
  };
  const schema = yup.object().shape({
    description: yup.string().required("This Field is Required"),
    experienceDuration: yup.string().required("This Field is Required"),
  });
  return (
    <div>
      <StepTitle title="What we'll do" />
      <div className="mt-4">
        <TitleBanner
          title="Tips"
          descritpion="our activity description is a chance to inspire guests to take your experience. Think about it like a story, with a beginning, middle, and end."
          secondTitle="Describe your experience"
          secondDescription="First, briefly describe what you’ll do with your guests. What unique details set it apart from other similar experiences?
            Then, get more specific. How will you kick things off? How will you make guests feel included and engaged during your time together?
            Finally, say what you want guests to leave with. Friends? Knowledge? A greater appreciation for your culture? End with a strong selling point
            "
        />
        <div className="mt-6">
          <OutlinedTextArea
            label="Describe briefly your experience"
            description="What are  you  hosting?Be specific"
            value={description}
            handleChange={(e) => setDescription(e)}
            error={errors.description}
          />
        </div>
        <div className="mt-4">
          <OutlinedTextInput
            label="How long is your experience"
            description="We suggest at least 2 hours based on your activity. You can always change this later."
            handleChange={(e) => setExperienceDuration(e)}
            value={experienceDuration}
            error={errors.experienceDuration}
          />
        </div>
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={(e) =>
            handleSubmit(e, formData, setState, setStep, setErrors, schema)
          }
          label="Continue"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
