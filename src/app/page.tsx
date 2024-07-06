import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Hero from "@/components/Herosection";
import OurTeam from "@/components/OurTeam";
import Studentreview from "@/components/Studentreview";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <About/> */}
      <Courses/>
      <OurTeam/>
      <Studentreview/>
      <Footer/>
    </div>
  );
}
