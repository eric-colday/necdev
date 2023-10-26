"use client";
import React, { useRef } from "react";
import styles from "./parallax.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className={styles.parallax}
      ref={ref}
      style={{
        background:
          type === "a-propos"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h2 style={{ y: yText }} className={styles.h2}>
        {type === "a-propos" ? "A propos" : "Projets"}
      </motion.h2>
      <motion.div className={styles.mountains}></motion.div>
      <motion.div
        className={styles.planets}
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "a-propos" ? "/public/img/planets.png" : "/public/img/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className={styles.stars}></motion.div>
    </div>
  );
};

export default Parallax;
