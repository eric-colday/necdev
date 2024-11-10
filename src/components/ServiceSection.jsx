"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import LanguageIcon from "@mui/icons-material/Language";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import CampaignIcon from "@mui/icons-material/Campaign";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

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

function ServiceSection() {
  return (
    <section>
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
          <h2 className="text-[50px] font-extrabold text-[#7c8587] max-[425px]:text-[35px] ">
            Mes Services
          </h2>
          <div className="mb-10 w-10 border-2 border-[#7c8587]"></div>
        </motion.div>
        <div className="grid grid-cols-4 gap-4 py-8 max-[871px]:grid-cols-2 max-[468px]:grid-cols-1 ">
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <LanguageIcon style={{ fontSize: 50 }} color="primary"/>
            <h3 className="font-bold text-2xl text-[#7c8587]">
              Création de site
            </h3>
            <p className="text-center px-2 text-[#7c8587]">
              Développez votre présence en ligne avec un site Web professionnel
              et optimisé.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <FindInPageIcon style={{ fontSize: 50 }} color="primary"/>
            <h3 className="font-bold text-2xl text-[#7c8587] ">SEO</h3>
            <p className="text-center px-2 text-[#7c8587]">
              Améliorez la visibilité de votre site Web sur les moteurs de
              recherche.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <CampaignIcon style={{ fontSize: 50 }} color="primary"/>
            <h3 className="font-bold text-2xl text-[#7c8587]">SEA</h3>
            <p className="text-center px-2 text-[#7c8587]">
              Optimisez vos campagnes publicitaires payantes pour un meilleur
              retour sur investissement.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center gap-4"
          >
            <QueryStatsIcon style={{ fontSize: 50 }} color="primary" />
            <h3 className="font-bold text-2xl text-[#7c8587]">Analytics</h3>
            <p className="text-center px-2 text-[#7c8587]">
              Suivez et analysez les performances de votre site Web pour
              optimiser vos stratégies de marketing en ligne.
            </p>
          </motion.div>
        </div>
        <Link
          href="/services"
          className="flex justify-center items-center mt-14"
        >
          <motion.button
            variants={cardVariants}
            className="w-40 h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out"
          >
            En savoir plus
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default ServiceSection;
