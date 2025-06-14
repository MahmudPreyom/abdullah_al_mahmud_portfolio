// import { Button } from "@/components/ui/button";
// import About from "./components/Home/About";
import Banner from "./components/Home/Banner";
// import Contact from "./components/Home/Contact";
// import Experience from "./components/Home/Experience";
import Footer from "./components/Home/Footer";
// import Services from "./components/Home/Services";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ExperiencePage from "./experience/page";
import ServicesPage from "./services/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <div>
      {/* <section id="banner" className="min-h-screen"> */}
      <section id="banner">
        <Banner />
      </section>
      <AboutPage />
      <ExperiencePage />
      <ServicesPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
