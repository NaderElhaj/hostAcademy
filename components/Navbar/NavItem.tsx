import { classNames } from "@/utils/ClassNames";
import Link from "next/link";
import React from "react";
interface NavbarProps {
  label: string;
  href: string;
  isActive?: boolean;
}
const NavItem = ({ label, href, isActive }: NavbarProps) => {
  return (
    <span
      className={classNames(
        "font-roboto font-medium text-base",
        isActive ? " text-[#ffaf20]" : "text-[#262625]"
      )}
    >
      {label}
    </span>
  );
};

export default NavItem;
