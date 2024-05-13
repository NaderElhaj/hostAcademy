"use client ";
import Button from "@/components/Button";
import RadioInput from "@/components/Form/RadioInput";
import StepTitle from "@/components/StepTitle";
import TitleBannerWithBullets from "@/components/TitleBannerWithBullets";
import { radioHandleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface OverviewProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<SetStateAction<{ likeYou: string }>>;
}
const Connection = ({ setStep, setState }: OverviewProps) => {
  const [errros, setErrors] = useState("");
  const [likeYou, setLikeYou] = useState();
  const likeYouOptions = [
    "I love bringing people together and creating new friendships",
    "I enjoy sharing my personal experience with others",
    "I prefer not to get too personal with guests ",
  ];
  const schema = yup.object().shape({
    likeYou: yup.number().required("This Field is Required"),
  });
  const formData = {
    likeYou,
  };
  const likeYouString = likeYouOptions[likeYou];
  const stringForm = {
    likeYou: likeYouString,
  };
  return (
    <div>
      <StepTitle title="Connection" />
      <div className="mt-4">
        <TitleBannerWithBullets
          descritpion="We’re looking for passionate storytellers who can share a unique perspective and insider knowledge.This could include:"
          bullets={[
            "Helping guests get to know each other",
            "Sharing personal stories",
            "Creating magical moments",
          ]}
          title="Guests should ideally come as strangers and leave as friends."
        />
      </div>
      <div className="mt-6 lg:mt-10 px-4 lg:px-40">
        <RadioInput
          label="Which of these sounds most like you?"
          handleChange={setLikeYou}
          options={likeYouOptions}
          selectedOption={likeYou}
          error={errros.likeYou}
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

export default Connection;
