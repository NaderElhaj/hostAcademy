import Button from "@/components/Button";
import RadioInput from "@/components/Form/RadioInput";
import StepTitle from "@/components/StepTitle";
import TitleBannerWithBullets from "@/components/TitleBannerWithBullets";
import { radioHandleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface OverviewProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{ activityHosting: string; licence: string }>
  >;
}
const Expertice = ({ setStep, setState }: OverviewProps) => {
  const [activityHosting, setActivityHosting] = useState();
  const [licence, setLicence] = useState();
  const [errors, setErrors] = useState({});

  const activityHostingOptions = [
    "Yes, I’ve hosted or taught this activity professionally",
    "Yes, I’ve hosted this activity informally for friends or family",
    "No, I’ve never hosted this activity before",
  ];
  const licenceOptions = [
    "Yes, I’m a full time Tour guide",
    "No, I’ve  no license but i’m a freelancer",
    "No, I’ve another full time job",
  ];
  const schema = yup.object().shape({
    activityHosting: yup.number().required("This Field is Required"),
    licence: yup.number().required("This Field is Required"),
  });
  const activity = activityHostingOptions[activityHosting];

  const licenceString = licenceOptions[licence];
  const stringForm = {
    activityHosting: activity,
    licence: licenceString,
  };

  const formData = {
    activityHosting,
    licence,
  };

  return (
    <div>
      <StepTitle title="Expertice" />
      <div className="mt-4">
        <TitleBannerWithBullets
          descritpion="We’re looking for passionate storytellers who can share a unique perspective and insider knowledge.This could include:"
          bullets={[
            "Being a well-informed enthusiast",
            "Having specialized training",
            "Having achievements in your field",
          ]}
          title="Guests value hosts with a distinctive point of view they can’t easily find elsewhere."
        />
      </div>
      <div className="mt-6 lg:mt-10 px-4 lg:px-40">
        <RadioInput
          label="Have you hosted this activity before?"
          handleChange={setActivityHosting}
          options={activityHostingOptions}
          selectedOption={activityHosting}
          error={errors.activityHosting}
        />
        <div className="mt-4">
          <RadioInput
            label="Do you have a Tour guide License? Select one option."
            handleChange={setLicence}
            options={licenceOptions}
            selectedOption={licence}
            error={errors.licence}
          />
        </div>
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

export default Expertice;
