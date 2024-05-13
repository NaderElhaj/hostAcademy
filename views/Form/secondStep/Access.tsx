import Button from "@/components/Button";
import RadioInput from "@/components/Form/RadioInput";
import StepTitle from "@/components/StepTitle";
import TitleBannerWithBullets from "@/components/TitleBannerWithBullets";
import { radioHandleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface OverviewProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<SetStateAction<{ whatYouDo: string }>>;
}
const Access = ({ setStep, setState }: OverviewProps) => {
  const [errros, setErrors] = useState({});
  const [description, setdescription] = useState();
  const descriptionOptions = [
    "It’s very unique—guests couldn’t do it without me",
    "Guests could do this on their own, but I bring a unique perspective to the activity",
    "Guests could do this on their own without me",
  ];

  const schema = yup.object().shape({
    description: yup.number().required("This Field is Required"),
  });
  const formData = {
    description,
  };
  const stringDescription = descriptionOptions[description];
  const stringForm = {
    whatYouDo: stringDescription,
  };
  return (
    <div>
      <StepTitle title="Expertice" />
      <div className="mt-4">
        <TitleBannerWithBullets
          descritpion="We’re looking for passionate storytellers who can share a unique perspective and insider knowledge.This could include:"
          bullets={[
            "Places only locals know about",
            "Interesting people",
            "Special items that are hard to find",
          ]}
          title="Guests love going beyond the typical tourist destinations."
        />
      </div>
      <div className="mt-6 lg:mt-10 px-4 lg:px-40">
        <RadioInput
          label="Have you hosted this activity before?"
          handleChange={setdescription}
          options={descriptionOptions}
          selectedOption={description}
          error={errros.description}
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

export default Access;
