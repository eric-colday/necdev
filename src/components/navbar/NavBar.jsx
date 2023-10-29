"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../context/ThemeContext.js";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    title: "Accueil",
    url: "#accueil",
  },
  {
    id: 2,
    title: "A propos",
    url: "#a-propos",
  },
  {
    id: 3,
    title: "Projets",
    url: "#projets",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const NavBar = () => {
  const { mode } = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav
      className={styles.container}
      style={
        mode === "dark"
          ? {
              backgroundColor: " #111",
            }
          : {
              backgroundColor: "white",
            }
      }
    >
      <Link href="#accueil" className={styles.logo}>
        NecDev
      </Link>
      <DarkModeToggle />
      {showLinks ? (
        <CloseIcon
          onClick={handleShowLinks}
          className={showLinks ? styles.closeIcon : styles.hiddenCloseIcon}
          variants={variants}
        />
      ) : (
        <MenuIcon
          className={showLinks ? styles.hiddenBurger : styles.burger}
          onClick={handleShowLinks}
        />
      )}

      <div
        className={showLinks ? styles.linksContainer : styles.links}
        style={
          mode === "dark"
            ? {
                backgroundColor: " #111",
              }
            : {
                backgroundColor: "white",
              }
        }
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className={showLinks ? styles.link : styles.hiddenLink}
            onClick={
              showLinks
                ? () => {
                    setShowLinks(false);
                  }
                : null
            }
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
