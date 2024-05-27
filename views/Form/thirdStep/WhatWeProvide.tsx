"use client";
import Button from "@/components/Button";
import ProvidedDropdown from "@/components/ProvidedDropdown";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import PlusIcon from "@/components/assets/PlusIcon";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface TitleProps {
  setState: Dispatch<
    SetStateAction<{ firstSevice: string; secondService: string }>
  >;
  setStep: Dispatch<SetStateAction<number>>;
}
const WhatWeProvide = ({ setState, setStep }: TitleProps) => {
  const [isFirstItemOpen, setIsFirstDropDownOpen] = useState(false);
  const [isSecondItemOpen, setIsSecondDropDownOpen] = useState(false);
  const [firstService, setFirstService] = useState("");
  const [secondService, setSecondService] = useState("");
  const [errors, setErrors] = useState({});
  const schema = yup.object().shape({
    firstService: yup.string().required("This Field is Required"),
    secondService: yup.string().required("This Field is Required"),
  });
  const formData = {
    firstService,
    secondService,
  };

  return (
    <div>
      <StepTitle title="What I'll provide" />
      <div className="mt-4">
        <TitleBanner
          title="Tips"
          descritpion=" Try to provide special equipment that is usually hard for guests to get on their own 
Keep food or drink dietary restrictions, and physical limitations for guests in mind
"
        />
      </div>
      <div className="mt-4">
        <h2 className="font-roboto font-bold text-2xl text-black ">
          Add details about what you'll provide
        </h2>
        <p className="font-roboto text-xl text-black">
          You can provide food and drink, special equipment, a ticket to a
          concert, or anything else special to make your guests comfortable.
        </p>
      </div>
      {isFirstItemOpen && (
        <div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed px-20 lg:px-48 inset-0 z-50 outline-none focus:outline-none bg-black/60">
            <ProvidedDropdown
              setState={setFirstService}
              setIsOpen={setIsFirstDropDownOpen}
            />
          </div>
        </div>
      )}
      {isSecondItemOpen && (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed px-20 lg:px-48 inset-0 z-50 outline-none focus:outline-none bg-black/60">
          <ProvidedDropdown
            setState={setSecondService}
            setIsOpen={setIsSecondDropDownOpen}
          />
        </div>
      )}
      <div className="flex  flex-col space-y-4 mt-4">
        {!firstService ? (
          <div>
            <Button
              label="Add Item "
              fontSize="large"
              textColor="black"
              backgroundColor="white"
              shadowed
              icon={<PlusIcon />}
              fullWidth
              classes="justify-center space-x-4 "
              handleClick={() => {
                setIsFirstDropDownOpen(true);
              }}
            />
            {errors.firstService && (
              <p className="text-red-500">{errors.firstService}</p>
            )}
          </div>
        ) : (
          <Button
            label={firstService}
            fontSize="large"
            textColor="black"
            backgroundColor="white"
            shadowed
            fullWidth
            classes="justify-center space-x-4 "
            handleClick={() => {
              setFirstService("");
            }}
          />
        )}
        {!secondService ? (
          <div>
            <Button
              label="More Items?"
              fontSize="large"
              textColor="black"
              backgroundColor="white"
              shadowed
              icon={<PlusIcon />}
              fullWidth
              classes="justify-center space-x-4 "
              handleClick={() => {
                setIsSecondDropDownOpen(true);
              }}
            />
            {errors.secondService && (
              <p className="text-red-500">{errors.secondService}</p>
            )}
          </div>
        ) : (
          <Button
            label={secondService}
            fontSize="large"
            textColor="black"
            backgroundColor="white"
            shadowed
            fullWidth
            classes="justify-center space-x-4 "
            handleClick={() => {
              setSecondService("");
            }}
          />
        )}
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

export default WhatWeProvide;
