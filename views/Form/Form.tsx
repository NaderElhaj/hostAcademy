"use client ";
import TextInput from "@/components/Form/TextInput";
import React, { Dispatch, SetStateAction, useState } from "react";
import ProfileInfo from "./firstSteps/ProfileInfo";
import ProfilePhoto from "./firstSteps/ProfilePhoto";
import LocationInfo from "./firstSteps/LocationInfo";
import Languages from "./firstSteps/Languages";
import PassionsPage from "./firstSteps/PassionsPage";
import Overview from "./secondStep/Overview";
import Expertice from "./secondStep/Expertice";
import Access from "./secondStep/Access";
import Connection from "./secondStep/Connection";
import Theme from "./thirdStep/Theme";
import Title from "./thirdStep/Title";

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
  const [profilePhoto, setProfilePhoto] = useState({
    image: "",
  });
  const [locationInfo, setLocationInfo] = useState({
    country: "",
    city: "",
    years: "",
    adress: "",
  });
  const [languages, setLanguages] = useState({
    languages: "",
    englishLevel: "",
  });
  const [passions, setPassions] = useState({
    secondPassion: "",
    bestThingAboutCity: "",
    description: "",
  });
  const [expertice, setExpertice] = useState({
    activityHosting: "",
    licence: "",
  });
  const [access, setAccess] = useState({
    whatYouDo: "",
  });
  const [connection, setConnection] = useState({
    likeYou: "",
  });
  const [themes, setThemes] = useState({
    firstTheme: "",
    secondTheme: "",
  });
  const [title, setTitle] = useState("");

  const allForms = {
    profileInfo,
    profilePhoto,
    locationInfo,
    languages,
    passions,
    expertice,
  };

  step > 4 && console.log(allForms);
  const getActiveComponent = (step: number) => {
    switch (step) {
      case 1:
        return <ProfileInfo setStep={setStep} setState={setProfileInfo} />;
      case 2:
        return <ProfilePhoto setStep={setStep} setState={setProfilePhoto} />;
      case 3:
        return <LocationInfo setStep={setStep} setState={setLocationInfo} />;
      case 4:
        return <Languages setStep={setStep} setState={setLanguages} />;

      case 5:
        return <PassionsPage setStep={setStep} setState={setPassions} />;
      case 6:
        return <Overview setStep={setStep} />;
      case 7:
        return <Expertice setStep={setStep} setState={setExpertice} />;
      case 8:
        return <Access setStep={setStep} setState={setAccess} />;
      case 9:
        return <Connection setStep={setStep} setState={setConnection} />;
      case 10:
        return <Theme setStep={setStep} setState={setThemes} />;
      case 11:
        return <Title setStep={setStep} setState={setTitle} />;
      case 12:
        return <WhatWeDo setStep={setStep} setState={setTitle} />;
    }
  };

  return (
    <div className="px-12 lg:px-32 xl:px-44 2xl:px-64 py-8 lg:py-14 ">
      {getActiveComponent(step)}
    </div>
  );
};

export default Form;
