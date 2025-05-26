"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMailSendFill } from "react-icons/ri";
import { MailCheck, MessageCircleMore, PhoneCall } from "lucide-react";
import Swal from "sweetalert2";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface ContactOptionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  link: string;
  linkText: string;
}

const Contact = () => {
  const { t } = useTranslation("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_cjiaxyw",
        "template_w4k4avb",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Z_mUev9W9x5mtXq3e"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: t("success"),
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-200"
    >
      <div className="text-center">
        <h5 className="text-muted-foreground text-lg">{t("subtitle")}</h5>
        <h2 className="text-4xl font-bold">{t("title")}</h2>
      </div>

      <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-5">
        <div className="flex flex-col gap-6">
          <ContactOption
            icon={<MailCheck className="text-primary" />}
            title="Email"
            subtitle="preyom5076@gmail.com"
            link="mailto:preyom5076@gmail.com"
            linkText={t("sendMessage")}
          />
          <ContactOption
            icon={<MessageCircleMore className="text-primary" />}
            title="Messenger"
            subtitle="Mahmud Preyom"
            link="https://m.me/mahmud.preyom"
            linkText={t("chatNow")}
          />
          <ContactOption
            icon={<PhoneCall className="text-primary" />}
            title="WhatsApp"
            subtitle="(+880) 1580-367168"
            link="https://api.whatsapp.com/send?phone=+8801580367168"
            linkText={t("messageNow")}
          />
        </div>

        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 px-8 py-10 rounded-3xl shadow-2xl bg-muted space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("form.name")}
            required
            className="w-full p-3 bg-transparent border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("form.email")}
            required
            className="w-full p-3 bg-transparent border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder={t("form.message")}
            required
            className="w-full p-3 bg-transparent border border-border rounded-2xl text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <RiMailSendFill className="text-lg" /> {t("form.submit")}
          </button>
        </form>
      </div>
    </section>
  );
};

const ContactOption: React.FC<ContactOptionProps> = ({
  icon,
  title,
  subtitle,
  link,
  linkText,
}) => (
  <div className="p-5 rounded-2xl shadow-2xl text-center flex flex-col items-center gap-2 transition-transform transform hover:scale-105 bg-muted">
    <div>{icon}</div>
    <h4 className="text-lg font-semibold">{title}</h4>
    <h5 className="text-muted-foreground">{subtitle}</h5>
    <Link
      href={link}
      target="_blank"
      className="text-primary text-sm underline hover:opacity-80"
    >
      {linkText}
    </Link>
  </div>
);

export default Contact;
