"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface LocationInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      country: string;
      city: string;
      years: string;
      adress: string;
    }>
  >;
}
const LocationInfo = ({ setStep }: LocationInfoProps) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [years, setYears] = useState("");
  const [adress, setAdress] = useState("");
  const [errors, setErrors] = useState({});

  const schema = yup.object().shape({
    country: yup.string().required("Country is required"),
    city: yup.string().required("City is required"),
    years: yup.string().required("Years is required"),
    adress: yup.string().required("Address is required"),
  });
  const handleSubmit = async (e) => {
    const formData = {
      country: country,
      city: city,
      years: years,
      adress: adress,
    };
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form is valid, submit data:", formData);
      // setState(formData);

      setStep((prev) => prev + 1);

      // Add your form submission logic here
    } catch (validationErrors) {
      const errorsObj = validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setErrors(errorsObj);
    }
  };
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
          error={errors.country}
        />
        <OutlinedTextInput
          label="Your city name"
          value={city}
          handleChange={(e: any) => setCity(e)}
          error={errors.city}
        />
      </div>
      <div className="flex space-x-7 mt-4 lg:mt-8">
        <OutlinedTextInput
          label="How many years have you been living it?"
          value={years}
          handleChange={(e: any) => setYears(e)}
          error={errors.years}
        />
        <OutlinedTextInput
          label="Address"
          value={adress}
          handleChange={(e: any) => setAdress(e)}
          error={errors.adress}
        />
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={(e) => handleSubmit(e)}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default LocationInfo;
