import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurReputation from "@/components/OurReputation";
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
    </div>
  );
};
export default page;
