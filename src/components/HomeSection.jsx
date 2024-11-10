"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 50,
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

const HomeSection = () => {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const { ref, inView } = useInView();

  return (
    <motion.section
      ref={ref}
      id="accueil"
      className="pt-[5rem] pb-[10rem] "
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a" }
          : { backgroundColor: "#0f172a" }
      }
      variants={fadeInAnimationsVariants}
      initial="initial"
      // animate={controls}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col items-center gap-[50px] ">
        <div className="flex gap-[60px] justify-center items-center px-10 max-[375px]:px-2 pt-[10rem] max-[768px]:flex-col max-[768px]:pt-[3rem] max-[768px]:gap-[40px] ">
          <img
            src="/img/nec.png"
            alt="NecDev"
            className="rounded-full w-[30%] h-[30%] animate-move max-[768px]:w-[50%] max-[768px]:h-[50%] max-[425px]:w-[70%] max-[425px]:h-[70%] "
          />
          <div className="flex flex-col justify-center max-[768px]:items-center  ">
            <motion.span
              ref={ref}
              variants={fadeInAnimationsVariants2}
              initial="initial"
              // animate={controls}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-[22px] text-[#7c8587] "
            >
              Salut, je suis{" "}
            </motion.span>
            <motion.h1
              ref={ref}
              variants={fadeInAnimationsVariants2}
              initial="initial"
              // animate={controls}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-[40px] text-white max-[469px]:text-[28px] "
            >
              Eric Colday Noubissi <br />
            </motion.h1>
            <motion.h2
              ref={ref}
              variants={fadeInAnimationsVariants3}
              initial="initial"
              // animate={controls}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="text-3xl font-extrabold text-[#7c8587] max-[768px]:text-center max-[425px]:text-[25px] "
            >
              Consultant <br /> Webmarketing et Data
            </motion.h2>
            <motion.p
              ref={ref}
              variants={fadeInAnimationsVariants3}
              initial="initial"
              // animate={controls}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              className="pb-4 text-[#7c8587] max-[768px]:px-4 max-[768px]:text-center"
            >
              Boostez votre visibilité en ligne avec un expert SEO, SEA et
              Analytics.
            </motion.p>
            <div className="flex gap-[20px]">
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GitHubIcon className="text-[#2f3854] cursor-pointer hover:text-[#7c8587] " />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="text-[#2f3854] cursor-pointer hover:text-[#7c8587] " />
              </Link>
            </div>
            <Link
              href="/qui-suis-je"
              className="mt-8 max-[812px]:flex justify-center items-center "
            >
              <button className="w-56 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
                Qui suis-je ?
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 flex max-[477px]:flex-col justify-center items-center gap-10 ">
        <div className="flex justify-center items-center gap-2 ">
          <Number n={9} /> années d'expérience
        </div>
        <div className="flex justify-center items-center gap-2 ">
          <Number n={50} /> projets réussis
        </div>
      </div>
    </motion.section>
  );
};

export default HomeSection;
