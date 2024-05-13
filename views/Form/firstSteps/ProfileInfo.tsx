"use client";
import Button from "@/components/Button";
import DateInput from "@/components/Form/DateInput";
import TextInput from "@/components/Form/TextInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface ProfileInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{
      firstName: string;
      lastName: string;
      birthday: string;
      nationality: string;
      email: string;
      phone: string;
    }>
  >;
}
const ProfileInfo = ({ setState, setStep }: ProfileInfoProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    birthday: yup.string().required("Birthday is required"),
    nationality: yup.string().required("Nationality is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup
      .string()
      .matches(
        /((\+|00)216)?(74|71|78|70|72|9|4|2|5|73|75|76|77|79)[0-9]{6}/,
        "Invalid phone number"
      )
      .required("Phone number is required"),
  });
  const validateField = async (fieldName: any, value: any) => {
    try {
      await schema.validateAt(fieldName, { [fieldName]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
    } catch (error: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error.message,
      }));
    }
  };

  const handleSubmit = async (e) => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      nationality: nationality,
      email: email,
      phone: phone,
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
      setErrors(errorsObj);
    }
  };

  const errorClassName = "text-red-400";
  return (
    <div className="">
      <StepTitle title="Profile Information" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="Guests want to know who’s hosting them. This must be your actual name, not the name of a business. Only your first name will appear on your page. If you have co-hosts, you'll be able to add them later."
        />
      </div>
      <div className="flex flex-col  space-y-4 justify-center lg:px-10 mt-2 lg:mt-6">
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <TextInput
            handleChange={(e) => setFirstName(e)}
            label="First name"
            placeholder="Type your first name"
            value={firstName}
            name="firstName"
            error={errors.firstName}
          />
          <TextInput
            handleChange={(e) => setLastName(e)}
            label="Last name"
            placeholder="Type your last name"
            value={lastName}
            name="lastName"
            error={errors.lastName}
          />
        </div>
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <DateInput
            handleChange={(e) => setBirthday(e)}
            label="Birthday"
            placeholder="Type your birthday"
            value={birthday}
            name={"birthday"}
            error={errors.birthday}
          />
          <TextInput
            handleChange={(e) => setNationality(e)}
            label="Nationality"
            placeholder="Type your nationality"
            value={nationality}
            name="nationality"
            error={errors.nationality}
          />
        </div>
        <div className="flex items-center  lg:space-x-10 xl:space-x-30  ">
          <TextInput
            handleChange={(e) => setEmail(e)}
            label="Email"
            placeholder="Type your email"
            value={email}
            name="email"
            error={errors.email}
          />
          <TextInput
            handleChange={(e) => setPhone(e)}
            label="Mobile"
            placeholder="Type your mobile number"
            value={phone}
            name="phone"
            type="tel"
            error={errors.phone}
          />
        </div>
      </div>
      <div className="absolute bottom-24 right-10">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={handleSubmit}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
