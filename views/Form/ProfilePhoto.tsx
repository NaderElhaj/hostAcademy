import StepTitle from "@/components/StepTitle";
import TitleBanner from "@/components/TitleBanner";
import React, { Dispatch, SetStateAction } from "react";
interface ProfileInfoProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const ProfilePhoto = () => {
  return (
    <div>
      {" "}
      <StepTitle title="Profile Photo" />
      <div className="mt-4 lg:mt-16">
        <TitleBanner
          title="Tips"
          descritpion="It’s important that guests can see your face. No company logos, favorite pets, blank images, etc.  We can’t accept photos that don’t show the real you.
      "
        />
      </div>
    </div>
  );
};

export default ProfilePhoto;
