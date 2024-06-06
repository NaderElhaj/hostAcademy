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
import WhatWeDo from "./thirdStep/WhatWeDo";
import WhatWeProvide from "./thirdStep/WhatWeProvide";
import GuestRequirments from "./thirdStep/GuestRequirments";
import Localisation from "./thirdStep/Localisation";
import GroupSize from "./fourthStep/GroupSize";
import GuestPricing from "./fourthStep/GuestPricing";
import ReviewAndSubmit from "./fourthStep/ReviewAndSubmit";

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
  const [whatWeDo, setWhatWeDo] = useState({
    description: "",
    experienceDuration: "",
  });
  const [whatWeProvide, setWhatWeProvide] = useState({
    firstSevice: "",
    secondService: "",
  });
  const [guestRequirements, setGuestRequirments] = useState({
    minimumAge: "",
    accessibilty: "",
    activityLevel: "",
    skillLevel: "",
  });
  const [localisation, setLocatlisation] = useState({
    country: "",
    street: "",
    city: "",
    stateAdress: "",
    zipCode: "",
  });
  const [groupSize, setGroupSize] = useState<{
    publicGroup: number | null;
    privateGroup: number | null;
  }>({
    publicGroup: null,
    privateGroup: null,
  });

  const [groupPricing, setGroupPricing] = useState({
    individualRate: 0,
    perInstanceRate: 0,
  });
  const allForms = {
    profileInfo,
    profilePhoto,
    locationInfo,
    languages,
    passions,
    expertice,
    access,
    connection,
    themes,
    title,
    whatWeDo,
    whatWeProvide,
  };

  console.log(groupSize);
  // step > 4 && console.log(allForms);
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
        return <WhatWeDo setStep={setStep} setState={setWhatWeDo} />;
      case 13:
        return <WhatWeProvide setStep={setStep} setState={setWhatWeProvide} />;
      case 14:
        return (
          <GuestRequirments setStep={setStep} setState={setGuestRequirments} />
        );
      case 15:
        return <Localisation setStep={setStep} setState={setLocatlisation} />;
      case 16:
        return <GroupSize setStep={setStep} setState={setGroupSize} />;
      case 17:
        return <GuestPricing setStep={setStep} setState={setGroupPricing} />;
      case 18:
        return <ReviewAndSubmit />;
    }
  };

  return (
    <div className="px-12 lg:px-32 xl:px-44 2xl:px-64 py-8 lg:py-14 ">
      {getActiveComponent(step)}
    </div>
  );
};

export default Form;
