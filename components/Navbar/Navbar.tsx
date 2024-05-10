"use client";
import { navItems } from "@/constant/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import NavItem from "./NavItem";
import SubNav from "./SubNav";
interface NavBarProps {
  currentStep: number;
}
const Navbar = ({ currentStep }: NavBarProps) => {
  return (
    <div className="max-w-[400px] w-full bg-[#10455B] min-h-screen   flex-col px-7 py-14 hidden lg:flex ">
      <div className="relative mx-auto w-[78px] h-[70px]">
        <Image
          src={"/images/Logo.png"}
          fill
          className="object-cover"
          alt="Logo Image"
        />
      </div>
      <h2 className="font-roboto text-xl font-bold text-[#ffffff] mt-8 pr-40">
        Your Hosting Application Process
      </h2>
      <div className="flex   justify-center flex-col  space-y-6 mt-12">
        {navItems.map((item, index) => (
          <div>
            <NavItem
              href={item.href}
              label={item.label}
              isActive={
                currentStep >= item.step &&
                currentStep <= item.step + item.subItems?.length - 1
              }
            />
            {currentStep >= item.step &&
              currentStep <= item.step + item.subItems?.length - 1 && (
                <div className="flex flex-col space-y-4 mt-4 ">
                  {item.subItems?.map((subItem, index) => (
                    <SubNav
                      key={index} // Ensure each element has a unique key
                      href={subItem.href}
                      label={subItem.label}
                      isActive={currentStep === subItem.step}
                    />
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
