"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { VscLiveShare } from "react-icons/vsc";
import { useTranslation } from "react-i18next";

const projectsStatic = [
  {
    frontend: "https://github.com/MahmudPreyom/summer-camp-client",
    backend: "https://github.com/MahmudPreyom/summer-camp-server-side",
    liveDemo: "https://summer-camp-e2784.web.app/",
    imageSrc: "https://i.ibb.co.com/C56DpnhV/music.jpg",
  },
  {
    frontend: "https://github.com/MahmudPreyom/chef-recipe-hunter-client-side",
    backend: "https://github.com/MahmudPreyom/chefs-corner-server",
    liveDemo: "https://chef-recipie-assignment10.web.app/",
    imageSrc: "https://i.ibb.co.com/KzXKv65v/cook.jpg",
  },
  {
    frontend: "https://github.com/MahmudPreyom/toy-marketplace-client-side",
    backend: "https://github.com/MahmudPreyom/toy-marketplace-server-side",
    liveDemo: "https://toys-planet-client.web.app/",
    imageSrc: "https://i.ibb.co.com/1t5fwMGZ/toy.jpg",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const { t } = useTranslation("projects");

  const projects = t("projects", { returnObjects: true }) as {
    title: string;
    details: string[];
    technologies: string;
  }[];

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-10 px-2 md:px-0 bg-background text-foreground">
      <h5 className="text-center text-muted-foreground">{t("subheading")}</h5>
      <h2 className="text-center text-2xl font-bold mb-6">{t("heading")}</h2>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-muted p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative w-full h-60 overflow-hidden rounded-lg group">
              <div className="w-full h-full transition-transform duration-[9000ms] ease-linear group-hover:-translate-y-[2500%]">
                <Image
                  src={projectsStatic[index].imageSrc}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <h3 className="text-xl text-center font-semibold mt-4">
              {project.title}
            </h3>

            <div className="flex flex-wrap gap-3 justify-center mt-3">
              <Link
                href={projectsStatic[index].frontend}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                {t("buttons.frontend")} <FaGithub />
              </Link>
              <Link
                href={projectsStatic[index].backend}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                {t("buttons.backend")} <FaGithub />
              </Link>
              <Link
                href={projectsStatic[index].liveDemo}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                {t("buttons.liveDemo")} <VscLiveShare />
              </Link>
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                {expanded === index
                  ? t("buttons.hideDetails")
                  : <>
                      {t("buttons.details")} <TbListDetails />
                    </>
                }
              </button>
            </div>

            {expanded === index && (
              <div className="mt-4 p-3 rounded-lg bg-popover text-popover-foreground">
                <h3 className="font-medium mb-2">
                  <span className="text-cyan-500">Technologies:</span>{" "}
                  {project.technologies}
                </h3>
                {project.details.map((detail, i) => (
                  <p key={i} className="text-sm mt-1">
                    {detail}
                  </p>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
