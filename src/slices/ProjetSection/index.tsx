"use client";

import Link from "next/link";
import React, { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20,
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
 * Props for `ProjetSection`.
 */
export type ProjetSectionProps =
  SliceComponentProps<Content.ProjetSectionSlice>;

/**
 * Component for "ProjetSection" Slices.
 */
const ProjetSection = ({ slice }: ProjetSectionProps): JSX.Element => {
  // const { theme } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="px-20 py-40 max-[768px]:px-5"
      >

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col items-center gap-3 pb-14 "
        >
          <PrismicRichText field={slice.primary.heading}
            components={{
              heading2: ({ children }) => (
                <motion.h2
                  className="text-[50px] text-center font-extrabold text-[rgb(124,133,135)] max-[425px]:text-[35px]"
                >
                  {children}
                </motion.h2>
              ),
            }}
          />

          <motion.div
            className="mb-10 w-10 border-4 border-[#468bff]"
          ></motion.div>
          <PrismicRichText field={slice.primary.paragraph}
            components={{
              paragraph: ({ children }) => (
                <motion.p
                  className="text-center"
                >
                  {children}
                </motion.p>
              ),
            }}
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-16 ">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col "
          >
            <motion.div
              variants={cardVariants}
              className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  "
            >
              <Link
                href="https://necstore.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrismicNextImage field={slice.primary.image}
                  className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-77%]"
                />
              </Link>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="w-1/2 h-auto max-[768px]:w-full "
            >
              <div className="flex flex-col justify-center items-center gap-8 h-full">
                <PrismicRichText field={slice.primary.heading_2}
                  components={{
                    heading2: ({ children }) => (
                      <motion.h3
                        className="text-4xl font-bold "
                      >
                        {children}
                      </motion.h3>
                    ),
                  }}
                />
                <PrismicRichText field={slice.primary.paragraph_2}
                  components={{
                    paragraph: ({ children }) => (
                      <motion.p
                        className="text-center px-10 max-[768px]:px-5 max-[425px]:px-0"
                      >
                        {children}
                      </motion.p>
                    ),
                  }}
                />
                <div className="flex items-center gap-3 ">
                  <PrismicRichText field={slice.primary.button_text}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                  <PrismicRichText field={slice.primary.button_text_2}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                </div>
                <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                  <Link
                    href="https://github.com/eric-colday/necstore-fullstack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c8587] hover:text-[#7c8587] text-center"
                  >
                    Code
                    <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </Link>
                  <Link
                    href="https://necstore.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c8587] hover:text-[#7c8587] text-center"
                  >
                    Live Demo
                    <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col "
          >
            <motion.div
              variants={cardVariants}
              className="w-1/2 h-auto max-[768px]:w-full "
            >
              <motion.div
                variants={cardVariants}
                className="flex flex-col justify-center items-center gap-8 h-full"
              >
                <PrismicRichText field={slice.primary.heading_3}
                  components={{
                    heading3: ({ children }) => (
                      <motion.h3
                        className="text-4xl font-bold "
                      >
                        {children}
                      </motion.h3>
                    ),
                  }}
                />
                <PrismicRichText field={slice.primary.paragraph_3}
                  components={{
                    paragraph: ({ children }) => (
                      <motion.p
                        className="text-center text-[#7c8587] px-10 max-[768px]:px-5 max-[425px]:px-0"
                      >
                        {children}
                      </motion.p>
                    ),
                  }}
                />
                <div className="flex items-center gap-3 ">
                  <PrismicRichText field={slice.primary.button_text_3}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                  <PrismicRichText field={slice.primary.button_text_4}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                </div>
                <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                  <Link
                    href="https://github.com/eric-colday/admin-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c8587] hover:text-[#7c8587] text-center"
                  >
                    Code
                    <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </Link>
                  <Link
                    href="https://necadmin-ui.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c8587] hover:text-[#7c8587] text-center"
                  >
                    Live Demo
                    <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
            <div className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  ">
              <Link
                href="https://necadmin-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrismicNextImage field={slice.primary.image_2}
                  className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-69%] "
                />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-row gap-5 h-[30rem] max-[768px]:h-[40rem] p-[2rem] rounded-2xl shadow-2xl shadow-blue-950 max-[768px]:flex-col "
          >
            <motion.div
              variants={cardVariants}
              className="w-1/2 h-auto rounded-2xl overflow-hidden max-[768px]:w-full  "
            >
              <div onClick={handleModal} className="cursor-pointer">
                <PrismicNextImage field={slice.primary.image_3}
                  className="w-full h-auto transform translate-y-0 transition-transform duration-[10s] ease-in-out hover:translate-y-[-77%]"
                />
              </div>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="w-1/2 h-auto max-[768px]:w-full "
            >
              <motion.div variants={cardVariants}
                className="flex flex-col justify-center items-center gap-8 h-full">
                <PrismicRichText field={slice.primary.heading_4}
                  components={{
                    heading3: ({ children }) => (
                      <motion.h3
                        className="text-4xl font-bold "
                      >
                        {children}
                      </motion.h3>
                    ),
                  }}
                />
                <PrismicRichText field={slice.primary.paragraph_4}
                  components={{
                    paragraph: ({ children }) => (
                      <motion.p
                        className="text-center px-10 max-[768px]:px-5 max-[425px]:px-0"
                      >
                        {children}
                      </motion.p>
                    ),
                  }}
                />
                <div className="flex items-center gap-3 ">
                  <PrismicRichText field={slice.primary.button_text_5}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                  <PrismicRichText field={slice.primary.button_text_6}
                    components={{
                      paragraph: ({ children }) => (
                        <motion.div
                          className="border p-4 text-center text-xs"
                        >
                          {children}
                        </motion.div>
                      ),
                    }}
                  />
                </div>
                <div className="flex items-center gap-10 text-xl font-semibold text-[#7c8587]">
                  <Link
                    href="https://github.com/eric-colday/necapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7c8587] hover:text-[#7c8587] text-center"
                  >
                    Code
                    <GitHubIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </Link>
                  <div
                    onClick={handleModal}
                    className="text-[#7c8587] hover:text-[#7c8587] text-center cursor-pointer"
                  >
                    Live Demo
                    <OpenInNewIcon className="ml-2 -mt-1 inline-block h-5 w-5 mr-1 stroke" />
                  </div>
                </div>
              </motion.div>
              {modal ? (
                <div className="fixed top-0 max-[768px]:top-[-40px] left-0 w-full h-full max-[768px]:h-[50rem] bg-black bg-opacity-70 z-50 flex justify-center items-center">
                  <div className="w-1/2 h-1/2 max-[768px]:h-[35rem] max-[515px]:w-[90%] bg-white p-2 rounded-2xl">
                    <div className="flex justify-end text-3xl pr-5  ">
                      <button onClick={handleModal}>X</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="text-xl text-center font-bold text-[#7c8587]">
                        Télécharger l'application
                      </h2>
                      <div className="flex justify-center items-center pt-4 max-[768px]:flex-col max-[425px]:mt-20">
                        <div className="flex flex-col justify-center items-center">
                          <img
                            src="/img/appstore.jpg"
                            alt="necapp"
                            className="w-1/2 h-auto border max-[425px]:hidden"
                          />
                          <Link
                            href="https://apple.co/42E0Mrg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/img/onappstore.svg"
                              alt="necapp"
                              className="w-full h-full max-[425px]:w-96 pt-2"
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col justify-center items-center pt-3">
                          <img
                            src="/img/appstore.jpg"
                            alt="necapp"
                            className="w-1/2 h-auto border max-[425px]:hidden"
                          />
                          <Link
                            href="https://apple.co/42E0Mrg"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src="/img/onappstore.svg"
                              alt="necapp"
                              className="w-full h-full max-[425px]:w-96 pt-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        </div>
        <PrismicNextLink field={slice.primary.button_link}
          className="flex justify-center items-center mt-14"
        >
          <button className="w-48 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
            <>{slice.primary.button_text_7}</>
          </button>
        </PrismicNextLink>
      </div>
    </section>
  );
};

export default ProjetSection;
