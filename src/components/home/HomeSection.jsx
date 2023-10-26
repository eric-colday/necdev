"use client";

import React from "react";
import styles from "./homeSection.module.css";
import { motion } from "framer-motion";
import { yeseva_One } from "@/fonts/fonts";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
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

const HomeSection = () => {
  return (
    <section id="accueil" className={styles.home}>
      <div className={styles.containers}>
        <div className={styles.container}>
          <motion.img
            src="/img/nec.jpeg"
            alt="NecDev"
            className={styles.img}
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
            <motion.span className={styles.text} variants={textVariants}>
              Salut, je suis{" "}
            </motion.span>
            <motion.h2
              className={styles.h2}
              style={{
                fontFamily: yeseva_One,
              }}
              variants={textVariants}
            >
              Eric Colday Noubissi
            </motion.h2>
            <motion.span className={styles.text2} variants={textVariants}>
              Développeur Front-end React{" "}
            </motion.span>
            <motion.div className={styles.icons} variants={textVariants}>
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <GitHubIcon className={styles.icon} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className={styles.icon} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className={styles.skills}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className={styles.skill} variants={textVariants}>
            Tech Stack
          </motion.div>
          <motion.div className={styles.skill2} variants={textVariants}>
            |
          </motion.div>
          <motion.div className={styles.skill3} variants={textVariants}>
            _____
          </motion.div>
          <motion.div 
            className={styles.skillsContents}
          variants={textVariants}>
            <motion.img
              src="./img/icons.svg"
              className={styles.imgs}
              alt="logo html et css"
              whileHover={{ scale: 1.1 }}
              duration={{ duration: 1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              src="./img/icons2.svg"
              className={styles.imgs}
              alt="logo js et ts"
              whileHover={{ scale: 1.1 }}
              duration={{ duration: 1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              src="./img/icons3.svg"
              className={styles.imgs}
              alt="logo reactjs et nextjs"
              whileHover={{ scale: 1.1 }}
              duration={{ duration: 1 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.img
              src="./img/icons4.svg"
              className={styles.imgs}
              alt="logo tailwind et sass"
              whileHover={{ scale: 1.1 }}
              duration={{ duration: 1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
