"use client";

import { BsBootstrapFill } from "react-icons/bs";
import { BiLogoCss3 } from "react-icons/bi";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
  SiFigma,
  SiExpress,
  SiShadcnui,
} from "react-icons/si";
import { FaReact, FaNodeJs, FaHtml5, FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import Marquee from "react-fast-marquee";
import { BadgeCheck } from "lucide-react";

const frontendSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Bootstrap",
  "Tailwind",
  "React",
  "Next.js",
];

const backendSkills = [
  { skill: "MongoDB", level: "Experienced" },
  { skill: "Mongoose", level: "Experienced" },
  { skill: "Typescript", level: "Experienced" },
  { skill: "Node.js", level: "Intermediate" },
  { skill: "NoSQL", level: "Intermediate" },
  { skill: "Express.js", level: "Experienced" },
];

const Experience = () => {
  return (
    <section className="py-12 text-center text-foreground">
      <h5 className="text-muted-foreground text-lg">What Skills I Have</h5>
      <h2 className="text-3xl font-bold">My Experience</h2>

      {/* Marquee with icons */}
      <Marquee className="my-8 text-primary" speed={60}>
        <FaReact className="text-5xl" />
        <TbBrandVite className="text-5xl mx-16" />
        <SiTailwindcss className="text-5xl mx-16" />
        <BsBootstrapFill className="text-5xl mx-16" />
        <SiMongodb className="text-5xl mx-16" />
        <FaNodeJs className="text-5xl mx-16" />
        <SiFirebase className="text-5xl mx-16" />
        <FaJsSquare className="text-5xl mx-16" />
        <FaHtml5 className="text-5xl mx-16" />
        <BiLogoCss3 className="text-5xl mx-16" />
        <SiFigma className="text-5xl mx-16" />
        <RiNextjsFill className="text-5xl mx-16" />
        <SiTypescript className="text-5xl mx-16" />
        <SiExpress className="text-5xl mx-16" />
        <SiShadcnui className="text-5xl mx-16" />
      </Marquee>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 px-6">
        {/* Frontend Card */}
        <div className="p-6 rounded-xl border border-muted hover:border-primary transition">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Frontend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3">
                <BadgeCheck className="text-primary dark:text-yellow-400 w-5 h-5" />
                <div className="text-start">
                  <h4 className="text-sm font-medium text-foreground">
                    {skill}
                  </h4>
                  <small className="text-xs text-muted-foreground">
                    Experienced
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Card */}
        <div className="p-6 rounded-xl border border-muted hover:border-primary transition">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Backend Development
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {backendSkills.map(({ skill, level }, index) => (
              <div key={index} className="flex items-center gap-3">
                <BadgeCheck className="text-primary dark:text-yellow-400 w-5 h-5" />
                <div className="text-start">
                  <h4 className="text-sm font-medium text-foreground">
                    {skill}
                  </h4>
                  <small className="text-xs text-muted-foreground">
                    {level}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
