"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { PrismicNextImage } from "@prismicio/next";
import Brain from "../../components/brain";
import Image from "next/image";
import { animated, useSpring } from "react-spring";
import Link from "next/link";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const fadeInAnimationsVariants2 = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const fadeInAnimationsVariants3 = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.div className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold ">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  );
}



/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection = ({ slice }: AboutSectionProps): JSX.Element => {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  console.log(scrollYProgress);

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.section
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-[#0f172a] border-b border-[#7c8587]"
    >
      <motion.div
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="flex justify-center items-center h-full gap-[60px] px-40 py-20  max-[1101px]:px-4 max-[812px]:flex-col  "
      >
        <PrismicNextImage field={slice.primary.image}
          className="w-96 object-cover animate-move "
        />
        <div className="flex flex-col justify-center gap-4 ">
          <motion.h1
            variants={fadeInAnimationsVariants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-[22px]"
          >
            Qui suis-je ?{" "}
          </motion.h1>
          <motion.h2
            variants={fadeInAnimationsVariants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-4xl md:text-6xl font-bold"
          >
            Eric Colday Noubissi <br />
          </motion.h2>
          <motion.h3
            variants={fadeInAnimationsVariants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-4xl font-bold max-[425px]:text-[25px] "
          >
            Consultant en acquisition SEO et SEA
          </motion.h3>
          <motion.p
            variants={fadeInAnimationsVariants3}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="text-lg max-[768px]:px-4"
          >
            Depuis 2016, j’ai dirigé et optimisé plus de 50 projets pour des entreprises diverses,
            allant de la création de sites web à leur optimisation via les leviers d’acquisition
            SEO et SEA. Chaque projet a affiné mes stratégies pour offrir des solutions
            sur mesure adaptées aux besoins uniques de mes clients.
          </motion.p>
          <div className="mt-8 flex max-[477px]:flex-col items-center gap-10">
            <div className="flex justify-center items-center gap-2 ">
              <Number n={9} /> années d'expérience
            </div>
            <div className="flex justify-center items-center gap-2 ">
              <Number n={50} /> projets réussis
            </div>
          </div>
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>
      </motion.div>
      <motion.div
        className="h-full"
      >
        {/* CONTAINER */}
        <div className="h-[100vh] overflow-scroll lg:flex" ref={containerRef}>
          {/* TEXT CONTAINER */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">

            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Compétences
              </motion.h1>
              {/* SKILL LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isSkillRefInView ? { x: 0 } : {}}
                className="flex gap-4 flex-wrap"
              >
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google Search Console
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google Tag Manager
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google Analytics
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Screaming Frog SEO Spider
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  SEMRush
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Majestic
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Hubspot
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  MailChimp
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Meta ads
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  LinkedIn ads
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  TikTok ads
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  WordPress
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Prestashop
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Magento
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Drupal
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  JavaScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  TypeScript
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  React.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Next.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Tailwind CSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Framer Motion
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  SCSS
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  MongoDB
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  PostgreSQL
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Node.js
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Git
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Github
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Canva.com
                </div>
                <div className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Figma
                </div>
              </motion.div>
              {/* SKILL SCROLL SVG */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="rgba(255, 255, 255, 0.95)"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="rgba(255, 255, 255, 0.95)" strokeWidth="1"></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="rgba(255, 255, 255, 0.95)"
                  strokeWidth="1"
                ></path>
              </motion.svg>
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div
              className="flex flex-col gap-12 justify-center pb-48"
              ref={experienceRef}
            >
              {/* EXPERIENCE TITLE */}
              <motion.h1
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                transition={{ delay: 0.2 }}
                className="font-bold text-2xl"
              >
                Expériences
              </motion.h1>
              {/* EXPERIENCE LIST */}
              <motion.div
                initial={{ x: "-300px" }}
                animate={isExperienceRefInView ? { x: "0" } : {}}
                className=""
              >
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white text-[#0D1520] p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Chef de projet SEO et content manager
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      I led web development, offering expertise in JavaScript
                      frameworks.{" "}
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-[#468bff] text-sm font-semibold">
                      2024 - Present
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-[#0D1520] text-sm font-semibold w-fit">
                      Deepomatic
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#468bff] bg-white text-[#0D1520] -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
                </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 "></div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#468bff] bg-white text-[#0D1520] -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white text-sm text-[#0D1520] p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Consultant Webmarketing Freelance
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      I spearheaded React-based application development,
                      leveraging advanced skills.{" "}
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-[#468bff] text-sm font-semibold">
                      2018 - 2024{" "}
                    </div>
                  </div>
                </div>
                {/* EXPERIENCE LIST ITEM */}
                <div className="flex justify-between h-48">
                  {/* LEFT */}
                  <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white text-sm text-[#0D1520] p-3 font-semibold rounded-b-lg rounded-s-lg">
                      Assistant Webmarketing{" "}
                    </div>
                    {/* JOB DESC */}
                    <div className="p-3 text-sm italic">
                      I provided web solutions, applying a range of technologies
                      to address client requirements.{" "}
                    </div>
                    {/* JOB DATE */}
                    <div className="p-3 text-[#468bff] text-sm font-semibold">
                      2016 - 2018{" "}
                    </div>
                    {/* JOB COMPANY */}
                    <div className="p-1 rounded bg-white text-[#0D1520] text-sm font-semibold w-fit">
                      Zee Media
                    </div>
                  </div>
                  {/* CENTER */}
                  <div className="w-1/6 flex justify-center">
                    {/* LINE */}
                    <div className="w-1 h-full bg-gray-600 rounded relative">
                      {/* LINE CIRCLE */}
                      <div className="absolute w-5 h-5 rounded-full ring-4 ring-[#468bff] bg-white text-[#0D1520] -left-2"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* SVG CONTAINER */}
          <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
            <Brain scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
