import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurReputation from "@/components/OurReputation";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurReputation />
      <About />
    </div>
  );
};
export default page;
