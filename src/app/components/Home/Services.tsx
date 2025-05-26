"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const dropIn = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const { t } = useTranslation("services");

  const services = t("services", { returnObjects: true }) as {
    title: string;
    features: string[];
  }[];

  return (
    <section className="container mx-auto py-16 px-6 text-foreground">
      <h5 className="text-center text-lg text-muted-foreground">
        {t("subtitle")}
      </h5>
      <h2 className="text-center text-3xl font-bold mb-10">{t("title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="border border-border rounded-b-xl overflow-hidden shadow-md transition-all"
          >
            <div className="bg-primary text-primary-foreground text-center py-4 rounded-b-xl shadow">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>

            <motion.ul
              variants={dropIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="mt-4 px-6 py-5 space-y-5 font-medium">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="text-primary mt-1 w-5 h-5" />
                    <p className="text-muted-foreground">{feature}</p>
                  </li>
                ))}
              </ul>
            </motion.ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
