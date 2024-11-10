import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import ThemeToggle from "./themeToggle/ThemeToggle";
import { PrismicNextLink } from "@prismicio/next";
import MobileMenu from "./MobileMenu";
import ButtonsToggle from "./ButtonsToggle";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("navbar"); 

  return (
    <div className="bg-[#0f172a] fixed top-0 left-0 right-0 z-50 flex justify-around items-center h-[80px] gap-[100px] border-b-[1px] border-[#468bff] max-[375px]:gap-[50px]">
      <Link href="/" className="font-bold  text-[40px] text-[#468bff] p-2 max-[425px]:text-[25px] ">
        <div>NEC</div>
      </Link>
      <div className="flex justify-center items-center gap-[20px] text-[16px]">
        <ButtonsToggle settings={settings} />
        <MobileMenu settings={settings}/>
        <ThemeToggle /> 
      </div>
    </div>
  );
}
