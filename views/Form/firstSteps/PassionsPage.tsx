"use client";
import Button from "@/components/Button";
import OutlinedTextArea from "@/components/Form/OutlinedTextArea";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface LocationInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      secondPassion: string;
      bestThingAboutCity: string;
      description: string;
    }>
  >;
}

const PassionsPage = ({ setStep, setState }: LocationInfoProps) => {
  const [secondPassion, setSecondPassion] = useState("");
  const [bestThingAboutCity, setBestThingAboutCity] = useState("");
  const [description, setDescription] = useState("");
  const [errros, setErrors] = useState({});
  console.log(description);
  const schema = yup.object().shape({
    secondPassion: yup.string().required("Passions are required"),
    bestThingAboutCity: yup.string().required("this field  is required"),
    description: yup.string().required("Description  is required"),
  });
  const form = {
    secondPassion: secondPassion,
    bestThingAboutCity: bestThingAboutCity,
    description: description,
  };
  return (
    <div>
      <StepTitle title="Languages" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="You should be able to read, write, and speak in your primary language
      If you speak more languages, you can always add them to your experience page in the future 
       "
        />
        <div className="mt-4 lg:mt-10">
          <OutlinedTextInput
            handleChange={(e: any) => setSecondPassion(e)}
            label="What are you passionate about ?"
            value={secondPassion}
            error={errros.secondPassion}
          />
          <div className="mt-2 lg:mt-4">
            <OutlinedTextInput
              handleChange={(e: any) => setBestThingAboutCity(e)}
              label="what do you love most about your city ?"
              value={bestThingAboutCity}
              error={errros.bestThingAboutCity}
            />
          </div>
          <div className="mt-2 lg:mt-4">
            <OutlinedTextArea
              handleChange={(e: any) => setDescription(e)}
              label="what do you love most about your city ?"
              value={description}
              error={errros.description}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={(e) =>
            handleSubmit(e, form, setState, setStep, setErrors, schema)
          }
          label="Continue"
        />
      </div>
    </div>
  );
};

export default PassionsPage;
