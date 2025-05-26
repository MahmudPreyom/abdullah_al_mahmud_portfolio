"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, Code, Layers, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import about from "../../../assets/Remove background project.png";

const About = () => {
  const { t } = useTranslation("about");

  const cardData = [
    {
      icon: <Laptop className="w-8 h-8 text-primary mb-3" />,
      title: t("card1.title"),
      desc: t("card1.desc"),
    },
    {
      icon: <Code className="w-8 h-8 text-primary mb-3" />,
      title: t("card2.title"),
      desc: t("card2.desc"),
    },
    {
      icon: <Layers className="w-8 h-8 text-primary mb-3" />,
      title: t("card3.title"),
      desc: t("card3.desc"),
    },
  ];

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
              alt={t("about.imageAlt")}
              className="w-full max-h-[635px]"
              priority
            />
          </motion.div>
        </div>

        {/* Content */}
        <div>
          <div className="mb-10">
            <h5 className="text-xl text-muted-foreground">{t("getToKnow")}</h5>
            <h2 className="text-3xl font-bold text-foreground">{t("aboutMe")}</h2>
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
            {t("description")}
          </p>

          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition"
          >
            {t("letsTalk")} <MessageCircle className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
