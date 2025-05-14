/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, Code, Layers, MessageCircle } from "lucide-react";
import about from "../../../assets/Remove background project.png";
// import about from "../../../assets/Adobe Express - file (16).png";

const cardData = [
  {
    icon: <Laptop className="w-8 h-8 text-primary mb-3" />,
    title: "Interest",
    desc: "For Advance Web Development",
  },
  {
    icon: <Code className="w-8 h-8 text-primary mb-3" />,
    title: "Explore",
    desc: "Updated React Components",
  },
  {
    icon: <Layers className="w-8 h-8 text-primary mb-3" />,
    title: "Project",
    desc: "5+ projects",
  },
];

const About = () => {
  return (
    <section className="py-20 container px-4 mx-auto transition-colors duration-300">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 350, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="rounded-xl overflow-hidden transform rotate-10 hover:rotate-0 transition-transform duration-300"
          >
            <Image
              src={about}
              alt="About Image"
              className="w-full max-h-[635px]"
              priority
            />
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <div className="mb-10">
            <h5 className="text-xl text-muted-foreground">Get To Know</h5>
            <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {cardData.map(({ icon, title, desc }, index) => (
              <motion.article
                key={index}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-muted p-6 rounded-lg text-center hover:scale-105 transition-all"
              >
                <div className="flex justify-center">{icon}</div>
                <h5 className="font-semibold mt-2">{title}</h5>
                <small className="text-sm text-muted-foreground">{desc}</small>
              </motion.article>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-8 text-lg">
            Hi there! I am a MERN Stack Developer, FrontEnd and BackEnd
            Developer, and my name is Abdullah Al Mahmud.I am from Feni,
            Bangladesh. With regards to web development, I have a particular
            passion for learning new things. I build web applications with the
            use of HTML, CSS, JavaScript, ReactJS, Next.js, and many more
            technologies. I also specialize in responsive and dynamic website
            creation. My work as a backend developer involves technology such as
            Node.js, Express.js, and MongoDB. For testing and deploying
            applications, I utilize Postman, GitHub, Vercel, and other version
            control tools. As a full-stack developer, I am scaling and securing
            applications with TypeScript and CORS.
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            Let's Talk <MessageCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
