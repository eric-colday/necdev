"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-8 ">
      <button
        className="w-[100px] h-[40px] border border-[#7c8587]  cursor-pointer hover:border-2 transition-all duration-300 ease-in-out disabled:border disabled:border-[#7c8587] disabled:bg-slate-800 disabled:cursor-not-allowed  "
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Précédent
      </button>
      <button
        disabled={!hasNext}
        className="w-[100px] h-[40px] border border-[#7c8587]  cursor-pointer hover:border-2 transition-all duration-300 ease-in-out disabled:border disabled:border-[#7c8587] disabled:bg-slate-800 disabled:cursor-not-allowed  "
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
