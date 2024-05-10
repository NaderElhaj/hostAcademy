"use client ";
import TextInput from "@/components/Form/TextInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePhoto from "./ProfilePhoto";
import LocationInfo from "./LocationInfo";
import Languages from "./Languages";
import PassionsPage from "./PassionsPage";
interface FormProps {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}
const Form = ({ step, setStep }: FormProps) => {
  const [profileInfo, setProfileInfo] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    nationality: "",
    email: "",
    phone: "",
  });

  const getActiveComponent = (step: number) => {
    switch (step) {
      case 0:
        return <ProfileInfo setStep={setStep} setState={setProfileInfo} />;
      case 1:
        return <ProfilePhoto setStep={setStep} />;
      case 2:
        return <LocationInfo setStep={setStep} />;
      case 3:
        return <Languages setStep={setStep} />;
      case 4:
        return <PassionsPage setStep={setStep} />;
    }
  };

  return (
    <div className="px-12 lg:px-32 xl:px-44 2xl:px-64 py-8 lg:py-14 ">
      {getActiveComponent(step)}
    </div>
  );
};

export default Form;
