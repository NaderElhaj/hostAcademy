"use client ";
import Button from "@/components/Button";
import ProfileImageUpload from "@/components/ProfileImageUpload";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface ProfileInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      image: string;
    }>
  >;
}
const ProfilePhoto = ({ setStep, setState }: ProfileInfoProps) => {
  const schema = yup.object().shape({
    image: yup.string().required("image is required"),
  });
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    const formData = {
      image: image,
    };
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      console.log("Form is valid, submit data:", formData);
      setState(formData);

      setStep((prev) => prev + 1);

      // Add your form submission logic here
    } catch (validationErrors) {
      const errorsObj = validationErrors.inner.reduce((acc, err) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
      setError(errorsObj.image);
    }
  };

  return (
    <div>
      {" "}
      <StepTitle title="Profile Photo" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="Its important that guests can see your face. No company logos, favorite pets, blank images, etc. We cant accept photos that dont show the real you. "
        />
      </div>
      <div className="mt-4 lg:mt-10">
        <ProfileImageUpload image={image} setImage={setImage} />
        {error && (
          <p className="text-red-500 text-center mt-4 text-xl">{error}</p>
        )}
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

export default ProfilePhoto;
