"use client";
import Button from "@/components/Button";
import TextInput from "@/components/Form/TextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import React, { Dispatch, SetStateAction, useState } from "react";
interface ProfileInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: () => void;
}
const ProfileInfo = ({ setState, setStep }: ProfileInfoProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="">
      <StepTitle title="Profile Information" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="Guests want to know who’s hosting them. This must be your actual name, not the name of a business. Only your first name will appear on your page. If you have co-hosts, you'll be able to add them later."
        />
      </div>
      <div className="flex flex-col  space-y-4 justify-center lg:px-10 mt-6 lg:mt-10">
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <TextInput
            handleChange={(e) => setFirstName(e)}
            label="First name"
            placeholder="Type your first name"
            value={firstName}
          />
          <TextInput
            handleChange={(e) => setLastName(e)}
            label="Last name"
            placeholder="Type your last name"
            value={lastName}
          />
        </div>
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <TextInput
            handleChange={(e) => setBirthday(e)}
            label="Birthday"
            placeholder="Type your birthday"
            value={birthday}
          />
          <TextInput
            handleChange={(e) => setNationality(e)}
            label="Nationality"
            placeholder="Type your nationality"
            value={nationality}
          />
        </div>
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <TextInput
            handleChange={(e) => setEmail(e)}
            label="Email"
            placeholder="Type your email"
            value={email}
          />
          <TextInput
            handleChange={(e) => setPhone(e)}
            label="Mobile"
            placeholder="Type your mobile number"
            value={phone}
          />
        </div>
      </div>
      <div className="absolute bottom-32 right-32">
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

export default ProfileInfo;
