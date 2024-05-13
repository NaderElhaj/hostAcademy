("");
import Button from "@/components/Button";
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
      languages: string;
      englishLevel: string;
    }>
  >;
}
const Languages = ({ setStep, setState }: LocationInfoProps) => {
  const [languages, setLanguages] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [errros, setErrors] = useState({});
  const schema = yup.object().shape({
    languages: yup.string().required("Languages are required"),
    englishLevel: yup.string().required("English level is required"),
  });
  const form = {
    languages: languages,
    englishLevel: englishLevel,
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
            handleChange={(e: any) => setLanguages(e)}
            label="what are the languages you are able to speak ?"
            value={languages}
            error={errros.languages}
          />
          <div className="mt-2 lg:mt-4">
            <OutlinedTextInput
              handleChange={(e: any) => setEnglishLevel(e)}
              label="How would you rate your English level?"
              value={englishLevel}
              error={errros.englishLevel}
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

export default Languages;
