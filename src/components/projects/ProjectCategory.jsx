import React from "react";
import { notFound } from "next/navigation";
import { CategoriesProjects } from "@/data";
import Link from "next/link";

const getData = () => {
  const data = CategoriesProjects;

  if (data) {
    return data;
  }

  return notFound();
};

export default function ProjectCategory() {
  const data = getData();

  return (
    <div className="mt-10 ">
      <div className="grid grid-cols-5 max-[488px]:grid-cols-3  max-[410px]:grid-cols-2 gap-10 max-[650px]:gap-1  text-center ">
        <Link href="/realisations">
          <button className="capitalize w-full h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
            <span>Tout</span>
          </button>
        </Link>
        {data.map((item) => (
          <Link key={item.id} href={`/realisations?cat=${item.slug}`}>
            <button className="capitalize w-full h-16 cursor-pointer border border-[#7c8587] hover:border-2 transition-all duration-300 ease-in-out">
              <span>{item.title}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
