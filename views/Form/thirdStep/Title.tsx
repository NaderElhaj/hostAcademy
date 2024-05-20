"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface TitleProps {
  setState: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}
const Title = ({ setState, setStep }: TitleProps) => {
  const [title, setTitle] = useState("");
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    title: yup
      .string()
      .required("Title is required")
      .max(40, "title is less than 40 characters"),
  });
  const formData = {
    title,
  };
  return (
    <div>
      <StepTitle title="Give your experience a title" />
      <div className="mt-4 ">
        <TitleBanner
          title="Tips"
          descritpion="Think about writing a title that describes your main activity so guests get a sense of what they’ll be doing. Consider using action verbs and making it unique to set your experience apart."
        />
      </div>

      <div className="mt-8">
        <OutlinedTextInput
          label="What is the title of your  experience? "
          handleChange={(e: any) => setTitle(e)}
          value={title}
          description="Make it short, descriptive, and exciting."
          error={errors.title}
        />
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

export default Title;
