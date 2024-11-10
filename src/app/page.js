import React from "react";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
