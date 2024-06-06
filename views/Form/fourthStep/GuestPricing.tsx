import Button from "@/components/Button";
import PricingInput from "@/components/Form/PricingInput";
import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import { handleSubmit } from "@/utils/formValidation";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as yup from "yup";

interface GuestPricingProps {
  setStep: Dispatch<SetStateAction<number>>;
  setState: Dispatch<
    SetStateAction<{ individualRate: number; perInstanceRate: number }>
  >;
}
const GuestPricing = ({ setStep, setState }: GuestPricingProps) => {
  const [individualRate, setIndividualRate] = useState(0);
  const [perInstanceRate, setPerInstanceRate] = useState(0);
  const [error, setErrors] = useState({});
  console.log(error);
  const schema = yup.object().shape({
    individualRate: yup.number().required("This Field is Required").min(1),
    perInstanceRate: yup.number().required("This Field is Required").min(1),
  });
  const formData = {
    individualRate,
    perInstanceRate,
  };
  return (
    <div>
      <StepTitle title="Guest Pricing" />

      <div className="mt-4">
        <TitleBanner descritpion="How much you charge is entirely up to you. Enter the price you want each guest to pay and discover what you can earn." />
      </div>
      <div className="mt-8 px-20 space-y-[60px]">
        <PricingInput
          label="Individual Rate"
          description="Each guest pays"
          name="individual"
          value={individualRate}
          handleChange={(e) => setIndividualRate(e)}
          hasEstimation
          error={error.individualRate}
        />
        <PricingInput
          label="Per instance: Private groups"
          description="If no other seats are taken, guests can book an instance for a private group."
          name="perInstance"
          value={perInstanceRate}
          handleChange={(e) => setPerInstanceRate(e)}
          error={error.perInstanceRate}
        />
        <p className="max-w-[340px] text-base font-roboto">
          Guests who book for a private group will pay the total per person
          pricing if that’s higher than your minimum price.
        </p>
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

export default GuestPricing;
