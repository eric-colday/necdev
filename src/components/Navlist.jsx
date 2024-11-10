import { createClient } from "@/prismicio";
import React from "react";

export default async function Navlist({ showLinks, setShowLinks }) {
  const client = createClient();

  const settings = await client.getSingle("navbar");
  return (
    <>
      {settings.data.navigation.map(({ link, label }) => (
        <div
          key={label}
          className={
            showLinks
              ? "text-[28px] max-[768px]:text-[28px]"
              : "styles.hiddenLink"
          }
          onClick={
            showLinks
              ? () => {
                  setShowLinks(false);
                }
              : null
          }
        >
          <PrismicNextLink field={link} className="p-3">
            {label}
          </PrismicNextLink>
        </div>
      ))}
    </>
  );
}
