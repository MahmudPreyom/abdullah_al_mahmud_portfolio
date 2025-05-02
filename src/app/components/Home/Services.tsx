"use client";

import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Full Stack (MERN) Developer",
    features: [
      "Developing complete web applications using MongoDB, Express.js, React, and Node.js.",
      "Creating clean, modular frontend interfaces with React and Tailwind CSS.",
      "Implementing RESTful APIs and handling asynchronous data fetching.",
      "Securing applications using middleware, authentication, and validation techniques.",
    ],
  },
  {
    title: "Frontend Development",
    features: [
      "HTML: Markup language for structuring web content.",
      "CSS: Stylesheet language for website styling.",
      "JavaScript: Programming language for interactive web elements.",
      "CSS Frameworks: Tailwind CSS, Bootstrap, Shadcn/ui, and DaisyUI for efficient UI development.",
      "Web Animation: Adding dynamic and interactive animations.",
    ],
  },
  {
    title: "Backend Development",
    features: [
      "Node.js and Express.js for building scalable backend services.",
      "MongoDB for flexible NoSQL database integration.",
      "Authentication using Firebase, JWT tokens, and role-based access control.",
      "API integration, server-side logic, and database modeling.",
    ],
  },
];

const Services = () => {
  return (
    <section className="container mx-auto py-16 px-6 text-foreground">
      <h5 className="text-center text-lg text-muted-foreground">
        What I Offer
      </h5>
      <h2 className="text-center text-3xl font-bold mb-10">Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <article
            key={index}
            className="border border-border rounded-b-xl overflow-hidden shadow-md transition-all"
          >
            <div className="bg-primary text-primary-foreground text-center py-4 rounded-b-xl shadow">
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>

            <ul className="mt-4 px-6 py-5 space-y-5 font-medium">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 w-5 h-5" />
                  <p className="text-muted-foreground">{feature}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
