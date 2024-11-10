"use client";

import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ settings }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden max-[768px]:block ">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-20 w-full h-[calc(78vh+68px)] bg-[#0f172a] flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          {settings.data.navigation.map(({ link, label }) => (
            <div
              key={label}
              className="text-[40px] text-center my-5 "
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
