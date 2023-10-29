import React from "react";
import HomeSection from "@/components/home/HomeSection";
import About from "@/components/about/About";
import styles from "./page.module.css";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className={styles.container}>
      <HomeSection />
      <section id="a-propos">
        <About />
      </section>
      <section id="projets">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
