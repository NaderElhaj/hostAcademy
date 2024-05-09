"use client ";
import TextInput from "@/components/Form/TextInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePhoto from "./ProfilePhoto";
interface FormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
const Form = ({ step, setStep }: FormProps) => {
  const [value, setValue] = useState("");
  const getActiveComponent = (step: number) => {
    switch (step) {
      case 0:
        return <ProfileInfo setStep={setStep} />;
      case 1:
        return <ProfilePhoto setStep={setStep} />;
    }
  };

  return (
    <div className="px-12 lg:px-32 xl:px-44 2xl:px-64 py-8 lg:py-14 ">
      {getActiveComponent(step)}
    </div>
  );
};

export default Form;
