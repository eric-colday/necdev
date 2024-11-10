"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CampaignIcon from "@mui/icons-material/Campaign";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { PrismicNextLink } from "@prismicio/next";

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

/**
 * Props for `ServiceSection`.
 */
export type ServiceSectionProps =
  SliceComponentProps<Content.ServiceSectionSlice>;

/**
 * Component for "ServiceSection" Slices.
 */
const ServiceSection = ({ slice }: ServiceSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className=" h-full px-10 py-36 "
      >
        <motion.div
          variants={cardVariants}
          className="flex flex-col items-center"
        >
          <PrismicRichText field={slice.primary.heading_2}
            components={{
              heading2: ({ children }) => (
                <h2
                  className="text-[50px] font-extrabold text-[#7c8587] max-[425px]:text-[35px] "
                >
                  {children}
                </h2>
              ),
            }} />
          <div className="mb-10 w-10 border-4 border-[#468bff]"></div>
        </motion.div>
        <div className="grid grid-cols-4 gap-4 py-8 max-[871px]:grid-cols-2 max-[468px]:grid-cols-1 ">
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <LanguageIcon style={{ fontSize: 50 }} color="primary" />
            <PrismicRichText field={slice.primary.heading_3}
              components={{
                heading3: ({ children }) => (
                  <h3 className="font-bold text-2xl text-[#7c8587]">
                    {children}
                  </h3>
                ),
              }} />
            <PrismicRichText field={slice.primary.paragraph}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-center px-2 text-[#7c8587]">
                    {children}
                  </p>
                ),
              }}
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <FindInPageIcon style={{ fontSize: 50 }} color="primary" />
            <PrismicRichText field={slice.primary.heading_3b}
              components={{
                heading3: ({ children }) => (
                  <h3 className="font-bold text-2xl text-[#7c8587]">
                    {children}
                  </h3>
                ),
              }} />
            <PrismicRichText field={slice.primary.paragraph_2}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-center px-2 text-[#7c8587]">
                    {children}
                  </p>
                ),
              }}
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <CampaignIcon style={{ fontSize: 50 }} color="primary" />
            <PrismicRichText field={slice.primary.heading_3c}
              components={{
                heading3: ({ children }) => (
                  <h3 className="font-bold text-2xl text-[#7c8587]">
                    {children}
                  </h3>
                ),
              }}
            />
            <PrismicRichText field={slice.primary.paragraph_3}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-center px-2 text-[#7c8587]">
                    {children}
                  </p>
                ),
              }}
            />
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <QueryStatsIcon style={{ fontSize: 50 }} color="primary" />
            <PrismicRichText field={slice.primary.heading_3d}
              components={{
                heading3: ({ children }) => (
                  <h3 className="font-bold text-2xl text-[#7c8587]">
                    {children}
                  </h3>
                ),
              }}
            />
            <PrismicRichText field={slice.primary.paragraph_4}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-center px-2 text-[#7c8587]">
                    {children}
                  </p>
                ),
              }}
            />
          </motion.div>
        </div>
        <PrismicNextLink field={slice.primary.button_link}
          className="flex justify-center items-center mt-14"
        >
          <button className="w-40 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
            <>{slice.primary.button_text}</>
          </button>
        </PrismicNextLink>
      </motion.div>
    </section>
  );
};

export default ServiceSection;
