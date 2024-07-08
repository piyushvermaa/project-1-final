import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Herosection";
import OurTeam from "@/components/OurTeam";
import Studentreview from "@/components/Studentreview";
import Image from "next/image";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <About/> */}
      <About/>
      <Courses/>
      <OurTeam/>
      <Studentreview/>
      <Contact/>
      <Footer/>

    </div>
  );
}
