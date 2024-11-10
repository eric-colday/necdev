"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { motion } from "framer-motion";

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

const AboutSection = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section id="apropos" >
      <motion.div
        variants={fadeInAnimationsVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a" }
            : { backgroundColor: "#0f172a" }
        }
        className="flex justify-center items-center h-full gap-[60px] px-40 py-60  max-[1101px]:px-4 max-[812px]:flex-col  "
      >
        <motion.img
          variants={fadeInAnimationsVariants2}
          src="/img/Photo de profil de face - eric colday noubissi.jpg"
          alt="Photo de profil de Nec"
          className="w-96 object-cover animate-move "
        />
        <motion.div
          variants={fadeInAnimationsVariants2}
          className="flex flex-col justify-center gap-[10px] "
        >
          <h1 className="text-[50px] font-extrabold text-[#7c8587] max-[812px]:text-center max-[425px]:text-[35px]  ">
            Qui suis je ?
          </h1>
          <p className="text-[#7c8587] max-[812px]:text-center">Bonjour</p>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Je suis<strong> Eric Colday NOUBISSI </strong>,{" "}
            <strong>Consultant Webmarketing et Data</strong> freelance depuis
            2016. Fort de mon expérience et de mon expertise, je suis déterminé
            à transformer vos ambitions digitales en réussites concrètes.
          </p>
          <h3 className="text-[20px] font-extrabold text-[#7c8587] max-[812px]:text-center">
            Mon Parcours Professionnel
          </h3>
          <p className="text-[#7c8587] max-[812px]:text-center">
            Depuis 2016, j'ai eu l'opportunité de gérer et d'optimiser près de
            50 projets pour diverses entreprises, allant de la création de sites
            internet avec WordPress à la conception d'applications web
            performantes avec React/Next.js. Chaque projet m'a permis de
            perfectionner mes compétences et de développer des stratégies
            adaptées aux besoins spécifiques de mes clients.
          </p>
        </motion.div>
      </motion.div>
      <div>
        <div className="text-center py-40 px-20 max-[830px]:px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-[50px] font-extrabold text-[#7c8587] max-[425px]:text-[35px] ">
              Ma Philosophie
            </h2>
            <div className="mb-10 w-10 border-2 border-[#7c8587]"></div>
          </div>
          <p>
            Mon approche est centrée sur les résultats et la satisfaction de mes
            clients. Je crois en une collaboration étroite et transparente, où
            chaque stratégie est élaborée sur mesure pour répondre aux objectifs
            spécifiques de votre entreprise. Mon objectif ultime est de vous
            aider à atteindre et à dépasser vos objectifs en ligne grâce à des
            solutions efficaces et mesurables.
          </p>
          <div className="my-24  grid grid-cols-4 max-[966px]:grid-cols-2 max-[566px]:grid-cols-1  gap-4 ">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                9
              </motion.div>
              Années d'expérience en webmarketing et data.
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                + 50
              </motion.div>
              Projets réussis, couvrant divers secteurs d'activité.
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                15 %
              </motion.div>
              De croissance annuelle moyenne du trafic organique pour mes
              clients.
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                variants={fadeInAnimationsVariants}
                className="text-7xl max-[477px]:text-5xl  text-[#468bff] font-bold "
              >
                20 %
              </motion.div>
              De réduction des coûts par clic grâce à l'optimisation des
              campagnes SEA.
            </motion.div>
          </div>
          <Link
            href="/contact"
            className="mt-8 max-[812px]:flex justify-center items-center "
          >
            <button className="w-56 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
              Auditer mon site
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
