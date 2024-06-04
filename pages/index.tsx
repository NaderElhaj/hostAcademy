"use client ";
import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import Button from "@/components/Button";
import { themesArray } from "@/constant/themesList";
import { ConvertSlugToIcon } from "@/utils/ConvertSlugToIcon";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Form from "@/views/Form/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      {currentStep > 0 ? (
        <div className="flex ">
          <Navbar currentStep={currentStep} />
          <div className="relative">
            <Form setStep={setCurrentStep} step={currentStep} />
          </div>
        </div>
      ) : (
        <div className="flex  flex-col lg:flex-row h-screen">
          <div className="flex-1 px-6 lg:px-16 py-6 lg:scrollbar-hide">
            <div className="relative w-[78px] h-[71px]">
              <Image
                src={"/images/DarkLogo.png"}
                fill
                className="object-cover"
                alt="Logo Image"
              />
            </div>
            <h1 className="mt-10 lg:mt-16 font-roboto font-bold text-3xl  lg:text-5xl text-[#000000] scrollbar-hide py-2">
              Welcome!
            </h1>
            <h1 className=" font-roboto font-bold text-3xl  lg:text-5xl text-[#000000] scrollbar-hide  py-b">
              Your hosting journey starts here.
            </h1>
            <p className="font-roboto text-lg lg:text-[20px] text-[#000000] mt-5  max-w-[650px] ">
              Tabaani Experiences are small group activities and tour led by
              passionate local hosts like you...
            </p>
            <p className="font-roboto text-lg lg:text-[20px] text-[#000000] mt-5   max-w-[650px]  ">
              All experience ideas are reviewed by a small team at Tabaani. If
              your idea meets our quality standards, you’ll get to add dates and
              start hosting.
            </p>
            <p className="font-roboto text-lg lg:text-[20px] text-[#000000] mt-5   max-w-[650px]  ">
              We’re excited to learn more about you, and what you’d like to
              share with the world.
            </p>
            <div className="w-full flex  justify-between mt-10 ">
              <div></div>
              <div>
                <Button
                  backgroundColor="orange"
                  fontSize="medium"
                  textColor="white"
                  handleClick={() => setCurrentStep((prev) => prev + 1)}
                  label="Continue"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative  w-full h-full">
              <Image
                src={"/images/host.png"}
                fill
                className="object-cover"
                alt="Logo Image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
