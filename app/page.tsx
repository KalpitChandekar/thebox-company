import About from "@/components/About";
import Consultation from "@/components/Consultation";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurReputation from "@/components/OurReputation";
import Projects from "@/components/Projects";
import Service from "@/components/Service";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurReputation />
      <About />
      <Service />
      <Experience />
      <Consultation />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
export default page;
