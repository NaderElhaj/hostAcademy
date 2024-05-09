import { classNames } from "@/utils/ClassNames";
import Link from "next/link";
import React from "react";
interface SubNavProps {
  label: string;
  href: string;
  isActive?: boolean;
}
const SubNav = ({ href, label, isActive }: SubNavProps) => {
  return (
    <Link
      href={href}
      className={classNames(
        "font-roboto font-medium text-lg text-[#ffffff] border-l-4 pl-6 py-[10px] ",
        isActive
          ? "bg-[#ffaf20]/20 border-[#ffaf20] transition  duration-300 ease-in-out "
          : "border-transparent"
      )}
    >
      {label}
    </Link>
  );
};

export default SubNav;
