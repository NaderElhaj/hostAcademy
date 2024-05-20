import Button from "@/components/Button";
import ThemeDropDown from "@/components/Form/ThemeDropDown";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import PlusIcon from "@/components/assets/PlusIcon";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface ThemeProps {
  setState: Dispatch<
    SetStateAction<{ firstTheme: string; secondTheme: string }>
  >;
  setStep: Dispatch<SetStateAction<number>>;
}
const Theme = ({ setState, setStep }: ThemeProps) => {
  const [theme, setTheme] = useState("");
  const [secondTheme, setSecondTheme] = useState("");
  const [isFirstDropDownOpen, setIsFirstDropDownOpen] = useState(false);
  const [isSecondDropDownOpen, setIsSecondDropDownOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const formData = {
    theme,
    secondTheme,
  };
  const schema = yup.object().shape({
    theme: yup.string().required("This Field is Required"),
  });
  console.log(errors);
  return (
    <div className="">
      <StepTitle title="What type of experience will you host?" />
      <div className="mt-2">
        <TitleBanner
          title="Tips"
          descritpion="Select a theme that best describes what guests will mainly be doing on your experience. This will help guests find and book your experience"
        />
      </div>

      <div className="mt-2 px- 3">
        {isFirstDropDownOpen === false && theme.length === 0 && (
          <div>
            <h2 className="font-roboto font-bold text-[#000000] text-xl lg:text-2xl mt-7 lg:mt-11">
              Select a theme
            </h2>
            <Button
              label="Add a Principal theme "
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
          </div>
        )}
        {isFirstDropDownOpen === true && theme.length === 0 && (
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed px-20 lg:px-48 inset-0 z-50 outline-none focus:outline-none bg-black/60">
            <ThemeDropDown
              setState={setTheme}
              setIsOpen={setIsFirstDropDownOpen}
            />
          </div>
        )}
        {theme && (
          <div>
            <Button
              label={theme}
              fontSize="large"
              textColor="black"
              backgroundColor="white"
              shadowed
              fullWidth
              textCenter
              handleClick={() => {
                setTheme("");
              }}
            />
          </div>
        )}
        {errors.theme && <p className="text-red-500 text-sm">{errors.theme}</p>}
        <p></p>
      </div>
      <div className="mt-10 px- 3">
        {isSecondDropDownOpen === false && secondTheme.length === 0 && (
          <div>
            <h2 className="font-roboto font-bold text-[#000000] text-xl lg:text-2xl mt-7 lg:mt-11">
              Select a second theme
            </h2>
            <Button
              label="Add a secondary theme "
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
          </div>
        )}
        {isSecondDropDownOpen === true && secondTheme.length === 0 && (
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed px-20 lg:px-48 inset-0 z-50 outline-none focus:outline-none bg-black/60">
            <ThemeDropDown
              setState={setSecondTheme}
              setIsOpen={setIsSecondDropDownOpen}
            />
          </div>
        )}
        {secondTheme && (
          <div>
            <Button
              label={secondTheme}
              fontSize="large"
              textColor="black"
              backgroundColor="white"
              shadowed
              fullWidth
              textCenter
              handleClick={() => {
                setSecondTheme("");
              }}
            />
          </div>
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

export default Theme;
