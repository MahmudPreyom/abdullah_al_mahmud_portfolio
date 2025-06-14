// /i18n.ts
import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enNavbar from "./public/locales/en/navbar.json";
import bnNavbar from "./public/locales/bn/navbar.json";
// import arNavbar from "./public/locales/ar/navbar.json";
import enCommon from "./public/locales/en/common.json";
import bnCommon from "./public/locales/bn/common.json";
import arCommon from "./public/locales/ar/common.json";
import enAbout from "./public/locales/en/about.json";
import bnAbout from "./public/locales/bn/about.json";
import arAbout from "./public/locales/ar/about.json";
import enExperience from "./public/locales/en/experience.json";
import bnExperience from "./public/locales/bn/experience.json";
import arExperience from "./public/locales/ar/experience.json";
import enServices from "./public/locales/en/services.json";
import bnServices from "./public/locales/bn/services.json";
import arServices from "./public/locales/ar/services.json";
import enProjects from "./public/locales/en/projects.json";
import bnProjects from "./public/locales/bn/projects.json";
import arProjects from "./public/locales/ar/projects.json";
import enContact from "./public/locales/en/contact.json";
import bnContact from "./public/locales/bn/contact.json";
import arContact from "./public/locales/ar/contact.json";
import enFooter from "./public/locales/en/footer.json";
import bnFooter from "./public/locales/bn/footer.json";
import arFooter from "./public/locales/ar/footer.json";

const resources = {
  en: {
    navbar: enNavbar,
    common: enCommon,
    about: enAbout,
    experience: enExperience,
    services: enServices,
    projects: enProjects,
    contact: enContact,
    footer: enFooter,
  },
  bn: {
    navbar: bnNavbar,
    common: bnCommon,
    about: bnAbout,
    experience: bnExperience,
    services: bnServices,
    projects: bnProjects,
    contact: bnContact,
    footer: bnFooter,
  },
  ar: {
    // navbar: arNavbar,
    common: arCommon,
    about: arAbout,
    experience: arExperience,
    services: arServices,
    projects: arProjects,
    contact: arContact,
    footer: arFooter,
  },
};

const options: InitOptions = {
  lng: "en",
  fallbackLng: "en",
  resources,
  ns: [
    "navbar",
    "common",
    "about",
    "experience",
    "services",
    "projects",
    "contact",
    "footer",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true,
};

i18next.use(initReactI18next).init(options);

export default i18next;
