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
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="flex ">
      <Navbar currentStep={currentStep} />
      <div className="relative">
        <Form setStep={setCurrentStep} step={currentStep} />
      </div>
    </div>
  );
}
