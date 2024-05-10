"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import React, { Dispatch, SetStateAction, useState } from "react";
interface LocationInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const LocationInfo = ({ setStep }: LocationInfoProps) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [years, setYears] = useState("");
  const [adress, setAdress] = useState("");
  return (
    <div>
      <StepTitle title="Location informations" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="It’s important that guests can see your face. No company logos, favorite pets, blank images, etc. We can’t accept photos that don’t show the real you. "
        />
      </div>
      <div className="flex space-x-7 mt-8 lg:mt-20">
        <OutlinedTextInput
          label="Your country"
          value={country}
          handleChange={(e: any) => setCountry(e)}
        />
        <OutlinedTextInput
          label="Your city name"
          value={city}
          handleChange={(e: any) => setCity(e)}
        />
      </div>
      <div className="flex space-x-7 mt-4 lg:mt-8">
        <OutlinedTextInput
          label="How many years have you been living it?"
          value={years}
          handleChange={(e: any) => setYears(e)}
        />
        <OutlinedTextInput
          label="Address"
          value={adress}
          handleChange={(e: any) => setAdress(e)}
        />
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={() => setStep((prev) => prev + 1)}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default LocationInfo;
