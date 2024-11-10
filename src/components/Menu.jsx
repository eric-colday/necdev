"use client";

import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";

const links = [
  { url: "/", title: "Accueil" },
  { url: "/qui-suis-je", title: "Qui suis-je ?" },
  { url: "/services", title: "Services" },
  { url: "/realisations", title: "Realisations" },
  { url: "/contact", title: "Contact" },
];

function Menu({ settings }) {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-[#0D1520] text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {settings.data.navigation.map(({ link, label }) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
            <motion.div variants={listItemVariants} className="flex">
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="cursor-pointer mr-6 p-2 hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer p-2 hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <LinkedInIcon />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
      <div className="flex justify-center items-center gap-[20px] text-[16px] max-[768px]:hidden text-xl">
        {settings.data.navigation.map(({ link, label }) => (
          <div
            key={label}
            className={`rounded p-1 ${pathName === link && " text-white"}`}
          >
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;
