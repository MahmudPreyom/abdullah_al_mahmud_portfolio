"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { VscLiveShare } from "react-icons/vsc";

const projects = [
  {
    title: "Music Instruments Learning",
    frontend: "https://github.com/MahmudPreyom/summer-camp-client",
    backend: "https://github.com/MahmudPreyom/summer-camp-server-side",
    liveDemo: "https://summer-camp-e2784.web.app/",
    imageSrc: "https://i.ibb.co.com/C56DpnhV/music.jpg",
    details: [
      "1. This is a Full Stack Website with three roles: Admin, Instructor, and Student.",
      "2. Admin can assign roles and remove users.",
      "3. Instructors can add classes, which need admin approval.",
    ],
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router | Axios | JWT | Node.js",
  },
  {
    title: "Chef Recipe Hunter",
    frontend: "https://github.com/MahmudPreyom/chef-recipe-hunter-client-side",
    backend: "https://github.com/MahmudPreyom/chefs-corner-server",
    liveDemo: "https://chef-recipie-assignment10.web.app/",
    imageSrc: "https://i.ibb.co.com/KzXKv65v/cook.jpg",
    details: [
      "1. Users can sign up via GitHub, Google, or Email-Password.",
      "2. Authentication required for most pages.",
      "3. Logged-in users can view chefs and their recipes.",
    ],
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | React-Bootstrap | React-Router",
  },
  {
    title: "Toy Planet Car Market",
    frontend: "https://github.com/MahmudPreyom/toy-marketplace-client-side",
    backend: "https://github.com/MahmudPreyom/toy-marketplace-server-side",
    liveDemo: "https://toys-planet-client.web.app/",
    imageSrc: "https://i.ibb.co.com/1t5fwMGZ/toy.jpg",
    details: [
      "1. Authentication required (Email-Password, Google).",
      "2. Users can update toy data.",
      "3. Logged-in users can access My Toys and All Toys pages.",
    ],
    technologies:
      "VS Code | Firebase | MongoDB | Vercel | GitHub | Tailwind CSS | DaisyUI | React-Router",
  },
];

const Projects = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-10 px-2 md:px-0 bg-background text-foreground">
      <h5 className="text-center text-muted-foreground">My Recent Work</h5>
      <h2 className="text-center text-2xl font-bold mb-6">Projects</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="bg-muted p-4 rounded-xl shadow-md hover:shadow-xl transition-shadow"
          >
            {/* <div className="relative w-full h-60 overflow-hidden rounded-lg">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={500}
                height={400}
                className="w-full h-full hover:scale-110 transition-transform duration-500 object-cover"
              />
            </div> */}

            <div className="relative w-full h-60 overflow-hidden rounded-lg group">
              <div className="w-full h-full transition-transform duration-[9000ms] ease-linear group-hover:-translate-y-[2500%]">
                <Image
                  src={project.imageSrc}
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
                href={project.frontend}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                Frontend <FaGithub />
              </Link>
              <Link
                href={project.backend}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                Backend <FaGithub />
              </Link>
              <Link
                href={project.liveDemo}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                Live Demo <VscLiveShare />
              </Link>
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg transition hover:bg-accent"
              >
                {expanded === index ? (
                  "Hide Details"
                ) : (
                  <>
                    Details <TbListDetails />
                  </>
                )}
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
