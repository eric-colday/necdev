"use client";

import React, { useContext } from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";

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

const Contact = () => {
  const { mode } = useContext(ThemeContext);

  return (
    <footer>
      <div className={styles.contact}>
        <motion.div
          className="left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* <motion.img
            src="img/shake.svg"
            alt="image de contact"
            className={styles.img}
            variants={textVariants}
            style={{ filter: mode === "dark" ? "invert(1)" : "invert(0)" }}
          /> */}
          <Lottie
            animationData={require("/public/img/animation_lo8heyow.json")}
            loop={true}
            className={styles.img}
          />
        </motion.div>
        <motion.div
          className={styles.right}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div className={styles.contactBox} variants={textVariants}>
            <h2 className={styles.h22}>Contact</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <PhoneAndroidIcon />
                <Link
                  href="tel:+33698342060"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.clickInput}>06 98 34 20 60</span>
                </Link>
              </li>
              <li className={styles.li}>
                <EmailIcon />
                <Link
                  href="mailto:rcnoubissi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.clickInput}>
                    rcnoubissi@gmail.com
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div className={styles.footerList} variants={textVariants}>
          <motion.div> © Copyright 2023, Eric Colday Noubissi</motion.div>
          <ul className={styles.footerListItems}>
            <li>
              <Link
                href="https://www.linkedin.com/in/ecnoubissi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eric-colday"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Contact;
