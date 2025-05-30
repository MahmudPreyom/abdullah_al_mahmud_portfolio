/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FaGithub } from "react-icons/fa";
import { VscLiveShare } from "react-icons/vsc";
import { TbListDetails } from "react-icons/tb";
import { Users, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const TeamProjects = [
  {
    title: "medicineShop",
    frontend: "https://github.com/Asif419/medicine-shop-client",
    backend: "https://github.com/Asif419/medicine-shop-server",
    liveDemo: "https://medicine-shop-client.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/MkTwCJDc/Screenshot-2025-05-28-200152.png",
      "https://i.ibb.co/qTPJ5d5/Screenshot-2025-05-28-200219.png",
      "https://i.ibb.co/mCpjG67P/Screenshot-2025-05-28-200245.png",
      "https://i.ibb.co/xSxzcBCy/Screenshot-2025-05-28-200306.png",
      "https://i.ibb.co/KzwTcpb5/Screenshot-2025-05-28-200352.png",
      "https://i.ibb.co/5gQ9XNcL/Screenshot-2025-05-28-200419.png",
      "https://i.ibb.co/1YD8rj7t/Screenshot-2025-05-28-200447.png",
      "https://i.ibb.co/PZDjWvsS/Screenshot-2025-05-28-200503.png",
    ],
  },
  {
    title: "bookShop",
    frontend: "https://github.com/rahat-495/Book-Shop-Client",
    backend: "https://github.com/rahat-495/Book-Shop-Server",
    liveDemo: "https://book-shop-client-ten.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/Lhs29hLg/Screenshot-2025-05-28-201104.png",
      "https://i.ibb.co/xt7sMbhN/Screenshot-2025-05-28-201127.png",
      "https://i.ibb.co/ccC2gv00/Screenshot-2025-05-28-201428.png",
      "https://i.ibb.co/gHWdgf4/Screenshot-2025-05-28-201208.png",
      "https://i.ibb.co/JTzdTCx/Screenshot-2025-05-28-201224.png",
      "https://i.ibb.co/5h1w8KCd/Screenshot-2025-05-28-201614.png",
      "https://i.ibb.co/JTzdTCx/Screenshot-2025-05-28-201224.png",
    ],
  },
];
const PersonalProjects = [
  {
    title: "mediMart",
    frontend: "https://github.com/MahmudPreyom/medi-mart-client",
    backend: "https://github.com/MahmudPreyom/MediMart-server",
    liveDemo: "https://medi-mart-client-eight.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/prh1fZRf/Screenshot-2025-05-30-174456.png",
      "https://i.ibb.co/Xx2sMhFb/Screenshot-2025-05-30-174621.png",
      "https://i.ibb.co/VWsDs7M5/Screenshot-2025-05-30-174640.png",
      "https://i.ibb.co/vvRgbSG3/Screenshot-2025-05-30-174655.png",
      "https://i.ibb.co/Tx5NY9Q2/Screenshot-2025-05-30-174718.png",
      "https://i.ibb.co/My4mBjg8/Screenshot-2025-05-30-174747.png",
    ],
  },
  {
    title: "bicycleMart",
    frontend: "https://github.com/MahmudPreyom/bi-cycle-store-client",
    backend: "https://github.com/MahmudPreyom/bi-cycle-store-server",
    liveDemo: "https://bi-cycle-store-client.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/dqvsN8c/Screenshot-2025-05-30-173833.png",
      "https://i.ibb.co/5WcLzG2g/Screenshot-2025-05-30-174145.png",
      "https://i.ibb.co/99536J1q/Screenshot-2025-05-30-174117.png",
      "https://i.ibb.co/LDwjCkd8/Screenshot-2025-05-30-174310.png",
      "https://i.ibb.co/SwgdjWXj/Screenshot-2025-05-30-174336.png",
    ],
  },
  {
    title: "furniture",
    frontend: "https://github.com/MahmudPreyom/vintage-furniture-01",
    backend: "#",
    liveDemo: "https://vintage-furniture-01.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/VWDjDQTf/Screenshot-2025-05-31-002616.png",
      "https://i.ibb.co/TMHXCjgN/Screenshot-2025-05-31-002655.png",
      "https://i.ibb.co/1SVt1nG/Screenshot-2025-05-31-002729.png",
      "https://i.ibb.co/chWDJKfq/Screenshot-2025-05-31-002813.png",
      "https://i.ibb.co/RpRtRTk9/Screenshot-2025-05-31-002829.png",
      "https://i.ibb.co/5W4scnJj/Screenshot-2025-05-31-002843.png",
      "https://i.ibb.co/tpm1Cv8h/Screenshot-2025-05-31-002741.png"
    ],
  },
  {
    title: "healthyFood",
    frontend: "https://github.com/MahmudPreyom/fruit-salad-project",
    backend: "#",
    liveDemo: "https://fruit-salad-project.vercel.app/",
    imageSrcs: [
      "https://i.ibb.co/9HxvHBSh/Screenshot-2025-05-31-002410.png",
      "https://i.ibb.co/DH4bfgRX/Screenshot-2025-05-31-002504.png",
      "https://i.ibb.co/xt638Jn2/Screenshot-2025-05-31-002539.png",
      "https://i.ibb.co/6GF0KRC/Screenshot-2025-05-31-002555.png",
      "https://i.ibb.co/Cp5nQB9S/Screenshot-2025-05-31-002434.png",
    ],
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t } = useTranslation("projects");

  const renderProjects = (projects: typeof TeamProjects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, index) => {
        const [refCallback, slider] = useKeenSlider<HTMLDivElement>({
          loop: true,
          slides: { perView: 1, spacing: 10 },
          mode: "free-snap",
          drag: true,
        });

        useEffect(() => {
          if (!slider) return;

          let interval = setInterval(() => {
            slider.current?.next();
          }, 3000);

          const container = slider.current?.container;
          const handleMouseEnter = () => clearInterval(interval);
          const handleMouseLeave = () => {
            interval = setInterval(() => {
              slider.current?.next();
            }, 3000);
          };

          if (container) {
            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);
          }

          return () => {
            clearInterval(interval);
            if (container) {
              container.removeEventListener("mouseenter", handleMouseEnter);
              container.removeEventListener("mouseleave", handleMouseLeave);
            }
          };
        }, [slider]);

        return (
          <div
            key={index}
            className="bg-muted rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div
              ref={refCallback}
              className="keen-slider h-60 rounded-t-2xl overflow-hidden"
            >
              {project.imageSrcs.map((src, imgIndex) => (
                <div key={imgIndex} className="keen-slider__slide">
                  <Image
                    src={src}
                    alt={`${project.title}-img-${imgIndex}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>

            <div className="p-4 flex flex-col flex-1 justify-between">
              <h3 className="text-xl font-semibold text-center mt-2 mb-3">
                {t(`${project.title}.title`)}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href={project.frontend}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
                >
                  {t("buttons.frontend")} <FaGithub />
                </Link>
                {project.backend && project.backend !== "#" && (
                  <Link
                    href={project.backend}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
                  >
                    {t("buttons.backend")} <FaGithub />
                  </Link>
                )}
                <Link
                  href={project.liveDemo}
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
                >
                  {t("buttons.liveDemo")} <VscLiveShare />
                </Link>
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
                >
                  {expandedIndex === index ? (
                    t("buttons.hideDetails")
                  ) : (
                    <>
                      {t("buttons.details")} <TbListDetails />
                    </>
                  )}
                </button>
              </div>
              {expandedIndex === index && (
                <div className="mt-4 p-3 rounded-lg bg-popover text-popover-foreground">
                  <h4 className="font-medium mb-2">
                    <span className="text-cyan-500">
                      📅 {t(`${project.title}.date`)}
                    </span>
                  </h4>
                  <h4 className="font-medium mb-2">
                    <span className="text-cyan-500">Technologies:</span>{" "}
                    {t(`${project.title}.technologies`)}
                  </h4>
                  {(
                    t(`${project.title}.details`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((detail, i) => (
                    <p key={i} className="text-sm mt-1">
                      {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="container mx-auto py-10 px-2 md:px-0 bg-background text-foreground">
      <h5 className="text-center text-muted-foreground">{t("subheading")}</h5>
      <h2 className="text-center text-2xl font-bold mb-6">{t("heading")}</h2>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="container mx-auto flex justify-center gap-3">
          <TabsTrigger
            value="personal"
            className="flex items-center gap-2 group relative"
          >
            <User
              className="w-5 h-5 transition duration-300 group-hover:scale-110
        dark:text-cyan-400 dark:drop-shadow-[0_0_8px_#22d3ee]"
            />
            {t("tabs.personal")}
          </TabsTrigger>

          <TabsTrigger
            value="team"
            className="flex items-center gap-2 group relative"
          >
            <Users
              className="w-5 h-5 transition duration-300 group-hover:scale-110
        dark:text-pink-500 dark:drop-shadow-[0_0_8px_#ec4899]"
            />
            {t("tabs.team")}
          </TabsTrigger>
        </TabsList>

        {/* <TabsList className="container mx-auto flex justify-center gap-3">
          <TabsTrigger value="personal">{t("tabs.personal")}</TabsTrigger>
          <TabsTrigger value="team">{t("tabs.team")}</TabsTrigger>
          <TabsTrigger value="frontend">{t("tabs.frontend")}</TabsTrigger>
        </TabsList> */}

        <TabsContent value="personal">
          {renderProjects(PersonalProjects)}
        </TabsContent>
        <TabsContent value="team">{renderProjects(TeamProjects)}</TabsContent>
        {/* <TabsContent value="frontend">
          {renderProjects(FrontendProjects)}
        </TabsContent> */}
      </Tabs>
    </section>
  );
};

export default Projects;
