"use client";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Projects } from "@/data";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";

const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
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

const cardVariants2 = {
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

const getData = (page, cat) => {
  const data = cat ? Projects.filter((item) => item.catSlug === cat) : Projects;

  if (data) {
    return data;
  }

  return notFound();
};

export default function ProjecttsList({ page, cat }) {
  const data = getData(page, cat);
  const count = data.length;

  const POST_PER_PAGE = 8;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  // Détermine les projets à afficher pour la page actuelle
  const start = (page - 1) * POST_PER_PAGE;
  const end = start + POST_PER_PAGE;
  const currentData = data.slice(start, end);

  return (
    <div className="flex flex-col items-center ">
      <div className="grid grid-cols-4 max-[1006px]:grid-cols-2 max-[533px]:grid-cols-1 gap-4 py-20 ">
        {currentData.map((item) => (
          <Link href={`/realisation/${item.slug}`} key={item.id}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.6 }}
            >
              <motion.img
                src={item.image}
                alt="blog1"
                variants={cardVariants}
              />

              <motion.div
                variants={cardVariants2}
                className="flex flex-col items-center py-4 "
              >
                <h2 className="text-[20px] font-bold ">{item.title}</h2>
                <div className="font-semibold ">
                  <h3 className="capitalize"> {item.catSlug}</h3>
                </div>
                <p>{item.description}</p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
}
