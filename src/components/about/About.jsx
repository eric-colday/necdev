"use client";

import React from "react";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

const textVariants = {
  initial: {
    y: -30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <motion.img
          className={styles.img}
          src="/img/about.svg"
          alt="À propos de moi"
          width={400}
          height={400}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div
          className={styles.content}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className={styles.title} variants={textVariants}>
            A propos{" "}
          </motion.h2>
          <motion.span className={styles.subTitle} variants={textVariants}>
            Comme développeur <br /> front-end junior 🙂
          </motion.span>
          <motion.p className={styles.text} variants={textVariants}>
            je possède de bonnes compétences <br /> en HTML, CSS, JavaScript,
            React, Tailwind <br /> et SCSS. J{"'"}excelle dans la conception{" "}
            <br /> et la maintenance de sites Web <br /> responsives qui offrent{" "}
            <br /> une expérience utilisateur fluide.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
