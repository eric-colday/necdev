import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import ProjectCategory from "@/components/projects/ProjectCategory";
import ProjecttsList from "@/components/projects/ProjecttsList";

export default async function Page({ searchParams }) {
  const client = createClient();
  const page = await client.getSingle("realisations");

  const project = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <main className="border-b border-[#7c8587] ">
      <div className=" h-full px-10 py-36 ">
        <div className="flex flex-col items-center">
          <h1 className="text-[50px] font-extrabold text-[#7c8587] max-[425px]:text-[35px] capitalize ">
            {cat ? ` ${decodeURIComponent(cat)}` : <>{page.data.title}</>}
          </h1>
          <div className="mb-10 w-10 border-4 border-[#468bff]"></div>
          <PrismicRichText
            field={page.data.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-center">{children}</p>
              ),
            }}
          />
        </div>
        <ProjectCategory cat={cat} />
        <ProjecttsList cat={cat} page={project} />
      </div>
    </main>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("realisations");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
