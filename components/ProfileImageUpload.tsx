"use client";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "./Button";
import ImageUploadIcon from "./assets/ImageUploadIcon";
import { UploadButton } from "@/utils/uploadthing";
import { motion, useAnimate } from "framer-motion";

import Link from "next/link";
interface ProfileImageUpload {
  image: string;
  setImage: () => Dispatch<SetStateAction<string>>;
}

const ProfileImageUpload = ({ image, setImage }: ProfileImageUpload) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className=" flex  flex-col  items-center">
      {isLoading ? (
        <div
          className="w-52 h-52 lg:w-72 lg:h-72 relative animate-spin  "
          style={{ animationDuration: "3500ms" }}
        >
          <div className="rounded-full border-r-8 border-[#FFAF20] w-full h-full bg-[#fff]"></div>
        </div>
      ) : (
        <div className="relative w-[175px] h-[175px] xl:h-[250px] xl:w-[250px]">
          <Image
            src={image ? image : "/images/Avatar.png"}
            fill
            alt="Avatar"
            className="rounded-full"
          />
        </div>
      )}

      <Button
        backgroundColor="gray"
        fontSize="small"
        textColor="black"
        icon={<ImageUploadIcon />}
        classes="bg-[#E5E5E5] space-x-3 rounded-[15px] hover:bg-[#E5E5E5]/70"
        isDiv
        label="Upload Image"
      >
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            setImage(res[0].url);
            setIsLoading(false);
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={() => {
            setIsLoading(true);
          }}
          className="opacity-0 z-50  absolute top-0 left-0 w-full h-full"
        />
      </Button>

      <div className="max-w-[420px]">
        <h4 className="font-roboto font-medium text-base text-[#000000] ">
          Provide a photo that shows your face
        </h4>
        <p className="font-roboto font-light text-sm  text-[#000000]  ">
          We can’t accept logos, abstract images, pet portraits, etc. If you
          have Co-Hosts or assistants, they’ll add their photo later.
        </p>
      </div>
    </div>
  );
};

export default ProfileImageUpload;
