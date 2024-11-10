"use client";

import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import FormContact from "./FormContact";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.05,
    },
  },
};

const Footer = () => {

  return (
    <footer id="contact" className="pt-32 ">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col items-center py-10 px-4"
      >
        <motion.h2
          variants={cardVariants}
          className="pb-4 text-[50px] text-center font-extrabold text-[#7c8587] max-[425px]:text-[35px]"
        >
          Contact
        </motion.h2>
        <motion.div
          variants={cardVariants}
          className="mb-10 w-10 border-4 border-[#468bff]"
        ></motion.div>
        <motion.p variants={cardVariants} className="text-center">
          Prêt à discuter de votre projet ? Contactez-moi dès aujourd'hui <br />{" "}
          pour découvrir comment je peux vous aider à atteindre vos objectifs en
          ligne.
        </motion.p>
      </motion.div>
      <div className="flex justify-center items-center gap-[70px] px-20 pb-40  max-[1024px]:flex-col max-[1024px]:px-10 ">
        <div>
          <Lottie
            animationData={require("/public/img/animation_lo8heyow.json")}
            loop={true}
          />
        </div>
        <div className="flex flex-col justify-center items-center rounded-md w-1/2 p-10 shadow-xl  max-[1024px]:w-full  ">
          <FormContact />
        </div>
      </div>
      <div className="flex justify-around gap-[20px] p-5 border-t border-[#7c8587] ">
        <div className=" flex gap-[10px] max-[412px]:flex-col max-[412px]:items-center max-[412px]:text-center">
          <div>
            {" "}
            &copy;&nbsp; Tous droits réservés {new Date().getFullYear()} , Eric
            Colday Noubissi
          </div>
          <ul className="flex gap-[10px]">
            <li>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
