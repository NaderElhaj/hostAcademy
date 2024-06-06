"use client";
import Button from "@/components/Button";
import RadioInput from "@/components/Form/RadioInput";
import StepTitle from "@/components/StepTitle";
import { handleFinalSubmit } from "@/utils/formValidation";
import React, { useState } from "react";
import * as yup from "yup";

const ReviewAndSubmit = () => {
  const [option, setOption] = useState(null);
  const [localLaw, setLocalLaw] = useState(false);
  const [description, setDescription] = useState(false);
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  console.log(errors);
  const schema = yup.object().shape({
    option: yup.number().required("This Field is Required"),
    description: yup
      .boolean()
      .test(
        "is boolean",
        "this field must be checked",
        (value) => value === true
      ),
    terms: yup
      .boolean()
      .test(
        "is boolean",
        "this field must be checked",
        (value) => value === true
      ),
    localLaw: yup
      .boolean()
      .test(
        "is boolean",
        "this field must be checked",
        (value) => value === true
      ),
  });
  const formData = {
    option,
    description,
    terms,
    localLaw,
  };
  return (
    <div>
      <StepTitle title="Just a few things..." />
      <div className="mt-4">
        <h2 className="font-bold font-roboto text-xl">
          Just a few more questions before you submit
        </h2>
        <p className="text-lg font-roboto">
          Tabaani will review the version you’re about to submit, so make sure
          you’re happy with it. You can still go back and fine-tune your
          descriptions at any time.
        </p>
        <h2 className="font-bold font-roboto text-xl mt-3">
          Are you complying with local tourism laws and location requirements?
        </h2>
        <p className="text-lg font-roboto">
          Many places have laws regulating tours, tour guides, and other
          services provided to tourists. You may need a license or permit to
          host the experience, and you may also need formal permission from the
          location or community where you are hosting.
        </p>
        <p className="mt-3 text-lg font-roboto">
          What’s covered by these laws varies. In some places the law could
          apply only to visits to monuments and points of interest, elsewhere it
          could apply to any guided activity. The location where you are hosting
          the experience may also have rules or cultural norms applicable to the
          experience. It’s your responsibility to learn about and comply with
          any local laws that affect the experience.
        </p>
        <div className="px-10 mt-8">
          <RadioInput
            handleChange={(e) => setOption(e)}
            label="Which of the following applies to you and the experience?"
            selectedOption={option}
            options={[
              "I have all necessary licenses, permits, or permissions that apply to tour guiding or tourist services.",
              "No license, permit or permission applying to tour guiding or tourist services is required for me to operate the experience.",
              "I do not have the necessary licenses, permits, or permissions required to conduct the experience.",
            ]}
            error={errors.option}
          />
        </div>
        <p className="mt-5 text-lg font-roboto">
          I understand that Tabaani reserves the right to request proof of
          compliance (including proof of any applicable permits, licenses, or
          permissions), or proof that the experience is not regulated by the
          types of laws or requirements described above. Hosts and experiences
          may be removed from the platform if they are unable to provide such
          proof if requested.
        </p>
        <h2 className="font-bold font-roboto text-xl">
          Review our policies before you submit to Tabaani
        </h2>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Minimum guests
        </p>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Experiences on Tabaani have a 1 guest minimum. That means if one
          person books your experience, you’ll still be expected to host them.
        </p>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Service fees
        </p>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Tabaani takes 10% of each booking. Tabaani handles payment processing,
          provides 24-hour customer service, and maintains liability insurance
          for most experiences.
        </p>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Exclusivity
        </p>
        <p className="font-roboto text-lg text-[#000000]/80 mt-1">
          Each experience date you schedule through Tabaani must only be
          attended by Tabaani guests. Guests who book and pay through other
          platforms must be hosted at separate times.
        </p>
        <h2 className="font-bold font-roboto text-xl mt-4">
          By submitting, I confirm the following is true:
        </h2>
        <div className="px-10">
          <div className="flex  space-x-2">
            <input
              type="checkbox"
              className="bg-[#4A4A68]/10 rounded-md w-5 h-5 border-[#4A4A68]/10"
              onChange={() => setLocalLaw((prev) => !prev)}
            />
            <span className="font-medium text-xl">
              My experience complies with local laws.about other laws (like
              business licensing) that may apply.
            </span>
          </div>
          {errors.localLaw && <p className="text-red-500">{errors.localLaw}</p>}
          <div className="flex  space-x-2">
            <input
              type="checkbox"
              className="bg-[#4A4A68]/10 rounded-md w-5 h-5 border-[#4A4A68]/10"
              onChange={() => setDescription((prev) => !prev)}
            />
            <span className="font-medium text-xl">
              I confirm that my descriptions and photos are my own, and
              accurately reflect my experience.
            </span>
          </div>
          {errors.description && (
            <p className="text-red-500">{errors.description}</p>
          )}

          <div className="flex  space-x-2">
            <input
              type="checkbox"
              className="bg-[#4A4A68]/10 rounded-md w-5 h-5 border-[#4A4A68]/10"
              onChange={() => setTerms((prev) => !prev)}
            />
            <span className="font-medium text-xl">
              I agree to the Tabaani Experiences Terms of Service and Guest
              Refund Policy.
            </span>
          </div>
          {errors.terms && <p className="text-red-500">{errors.terms}</p>}
        </div>
      </div>
      <div className="w-full mx-auto">
        <Button
          backgroundColor="orange"
          fontSize="medium"
          textColor="white"
          handleClick={(e) => handleFinalSubmit(e, formData, setErrors, schema)}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
