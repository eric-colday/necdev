"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animated, useSpring } from "react-spring";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `HomeSection`.
 */
export type HomeSectionProps = SliceComponentProps<Content.HomeSectionSlice>;

/**
 * Component for "HomeSection" Slices.
 */

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


const HomeSection = ({ slice }: HomeSectionProps): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="accueil"
      className=" h-full mt-[-1rem] pb-[10rem] bg-[#0f172a] "


    >
      <motion.div
        ref={ref}
        variants={fadeInAnimationsVariants}
        initial="initial"
        // animate={controls}
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="flex flex-col items-center gap-[50px] ">
        <div className="flex gap-[60px] justify-center items-center px-10 max-[375px]:px-2 pt-[7rem] max-[768px]:flex-col max-[768px]:justify-center max-[768px]:items-center max-[768px]:pt-[3rem] max-[768px]:gap-[40px] ">
          <PrismicNextImage field={slice.primary.image}
            className="rounded-full w-[35%] h-[30%] animate-move max-[768px]:w-[50%] max-[768px]:h-[50%] max-[425px]:w-[70%] max-[425px]:h-[70%] "
          />
          <div className="h-full w-1/2 max-[768px]:w-auto max-[768px]:items-center max-[768px]:text-center flex flex-col gap-8 justify-center">
            {/* TITLE */}
            <div>
              <h1 className="mb-2 text-4xl text-white  md:text-6xl font-bold">
                Eric Colday Noubissi
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold">
                Consultant SEO, SEA et Data
              </h2>
            </div>
            {/* DESC */}
            <p className="md:text-xl">
              Découvrez mon univers digital, où SEO, SEA et développement web façonnent des stratégies sur mesure.
              Alliant créativité et expertise technique, je m’engage à concevoir des projets uniques qui maximisent la visibilité en ligne et reflètent l’excellence pour chaque client.
            </p>
            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-4 justify-center ">
              {/* SKILL TITLE */}
              <h1
                className="font-bold text-2xl"
              >
                Certifications
              </h1>
              {/* SKILL LIST */}
              <div
                // initial={{ x: "-300px" }}
                className="flex gap-4 flex-wrap max-[768px]:items-center max-[768px]:justify-center max-[768px]:gap-2"
              >
                <Link href="https://www.credly.com/badges/b7f1a0f4-6372-46ac-90d0-032b1334ac13"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  AgilePM® Foundation
                </Link>
                <Link
                  href="https://static.semrush.com/academy/certificates/b25f11af51/eric-colday-noubissi_25.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  SEMRush
                </Link>
                <Link
                  href="https://skillshop.credential.net/0b5b4d68-155f-4a3c-9a93-155cda833d38#acc.BQ4g72Sy"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google ads
                </Link>
                <Link
                  href="https://skillshop.credential.net/88ccdfc1-2334-41f0-99fc-164ce8523fbb#acc.zAcFTaUs"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google Analytics 4
                </Link>
                <Link
                  href="/Certificat.pdf"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Google Tag Manager
                </Link>
                <Link
                  href="https://www.credly.com/badges/b5afaf98-2382-4f37-945e-a9ea2f92f6ae/linked_in_profile"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Meta Certified
                </Link>
                <Link
                  href="https://verify.skilljar.com/c/voxhma4weyjk"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  LinkedIn ads
                </Link>
                <Link
                  href="https://app.hubspot.com/academy/achievements/bxlmtbcj/fr/1/eric-colday-noubissi/inbound"
                  target="_blank" rel="noopener noreferrer"
                  className="rounded  p-2 text-sm cursor-pointer bg-[#0D1520] text-white hover:bg-white hover:text-[#0D1520]">
                  Hubspot
                </Link>
              </div>
            </div>
            {/* BUTTONS */}
            <div className="w-full flex max-[768px]:justify-center gap-4">
              <Link
                href="/services"
                className="cursor-pointer"
              >
                <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                  Découvrir
                </button>
              </Link>
              <button className="p-4 rounded-lg ring-1 ring-white">
                Me contacter
              </button>
            </div>
            <div className="flex justify-start mt-8">
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
                className="cursor-pointer mr-6 p-2 border rounded-full border-[#7c8587] hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer p-2 border rounded-full border-[#7c8587] hover:border-[#468bff] hover:text-[#468bff] transition-all duration-300 ease-in-out"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeSection;
