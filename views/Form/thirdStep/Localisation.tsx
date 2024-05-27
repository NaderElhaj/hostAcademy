"use client";
import Button from "@/components/Button";
import OutlinedTextInput from "@/components/Form/OutlinedTextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface LocatlisationProps {
  setState: Dispatch<
    SetStateAction<{
      country: string;
      street: string;
      city: string;
      stateAdress: string;
      zipCode: string;
    }>
  >;
  setStep: Dispatch<SetStateAction<number>>;
}
const Localisation = ({ setState, setStep }: LocatlisationProps) => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateAdress, setStateAdress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [errors, setErrors] = useState({});
  const formData = {
    country,
    street,
    city,
    stateAdress,
    zipCode,
  };
  const schema = yup.object().shape({
    country: yup.string().required("This Field is Required"),
    street: yup.string().required("This Field is Required"),
    city: yup.string().required("This Field is Required"),
    stateAdress: yup.string().required("This Field is Required"),
    zipCode: yup.string().required("This Field is Required"),
  });
  return (
    <div>
      <StepTitle title="Location" />
      <div className="mt-2">
        <TitleBanner
          title="Tips"
          descritpion="Don’t leave it up to your guests to pick a location, most travelers don’t know your city well. They’re looking to you, the host, to identify the places that make an area special."
        />
      </div>
      <h2 className="font-roboto font-bold text-2xl text-black mt-2">
        Where should guests meet you?
      </h2>
      <p className="font-roboto text-xl text-black ">
        Make sure the meeting place is easy to find. The exact address won’t be
        shared until the guest’s reservation is confirmed.
      </p>
      <div className="mt-2 space-y-2">
        <OutlinedTextInput
          value={country}
          handleChange={(e) => setCountry(e)}
          hasShadow
          label="Country/region"
          error={errors.country}
        />
        <OutlinedTextInput
          value={street}
          handleChange={(e) => setStreet(e)}
          hasShadow
          label="Street adress"
          error={errors.street}
        />
        <OutlinedTextInput
          value={city}
          handleChange={(e) => setCity(e)}
          hasShadow
          label="City"
          error={errors.city}
        />
        <OutlinedTextInput
          value={stateAdress}
          handleChange={(e) => setStateAdress(e)}
          hasShadow
          label="State"
          error={errors.stateAdress}
        />
        <OutlinedTextInput
          value={zipCode}
          handleChange={(e) => setZipCode(e)}
          hasShadow
          label="Country/region"
          error={errors.zipCode}
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

export default Localisation;
