"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { PrismicNextLink } from "@prismicio/next";
import { ThemeContext } from "@/context/ThemeContext";

function ButtonsToggle({ settings }) {
  const [showLinks, setShowLinks] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <div>
      {/* {showLinks ? (
        <CloseIcon
          onClick={handleShowLinks}
          className={
            showLinks
              ? "cursor-pointer z-[100] text-white text-[30px] max-[768px]:cursor-pointer max-[768px]:z-[100] "
              : "hidden"
          }
          size={40}
        />
      ) : (
        <Image
          src="/burger.svg"
          alt="menu"
          width={30}
          height={30}
          className={
            showLinks
              ? " max-[768px]:hidden"
              : "hidden max-[768px]:block max-[768px]:text-[30px] max-[768px]:cursor-pointer max-[768px]:text-[#468bff]  "
          }
          onClick={handleShowLinks}
          style={{ filter: "invert(1)" }}
        />
      )} */}
      <div
        className={
          showLinks
            ? "bg-[#0f172a] h-screen mt-[80px] p-10 fixed top-0 left-0 right-0 z-50 max-[768px]:block "
            : "flex justify-center items-center gap-[20px] text-[16px] max-[768px]:hidden  "
        }
      >
        {settings.data.navigation.map(({ link, label }) => (
          <div
            key={label}
            className={
              showLinks
                ? "text-[40px] text-center"
                : ""
            }
            onClick={
              showLinks
                ? () => {
                    setShowLinks(false);
                  }
                : null
            }
          >
            <PrismicNextLink field={link}>
              {label}
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonsToggle;
