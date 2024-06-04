"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface GroupSizeProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{ privateGroup: null | number; publicGroup: null | number }>
  >;
}
const GroupSize = ({ setState, setStep }: GroupSizeProps) => {
  const [privateGroups, setPrivateGroups] = useState();
  const [publicGroups, setPublicGroups] = useState();
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    privateGroups: yup.number().required("This Field is Required"),
    publicGroups: yup.number().required("This Field is Required"),
  });
  const formData = {
    privateGroups,
    publicGroups,
  };
  return (
    <div>
      <StepTitle title="Maximum group size" />
      <div className="mt-4">
        <TitleBanner descritpion="Think about what group size is best for your experience. Is it more interactive with fewer people, or more fun with a larger group? Remember: If only one person books, you'll still be expected to host.You can host a public group for up to 10 guests. Guests who book may or may not know each other." />
      </div>
      <div className="w-full flex-col space-y-6 lg:space-y-16 mt-6 lg:mt-14 ">
        <OutlinedTextInput
          type="number"
          value={publicGroups}
          handleChange={(e) => setPublicGroups(e)}
          label="Public groups"
          description="We suggest 8 people based on your activity. You can always change this later."
          error={errors.publicGroups}
          hasShadow
          minWidth
        />
        <OutlinedTextInput
          type="number"
          value={privateGroups}
          handleChange={(e) => setPrivateGroups(e)}
          label="Public groups"
          description="We suggest 8 people based on your activity. You can always change this later."
          error={errors.privateGroups}
          hasShadow
          minWidth
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

export default GroupSize;
