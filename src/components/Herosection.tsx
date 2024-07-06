"use client"
import WordPullUp from "./magicui/words-pullup";
import Navbar from "./Navbar";
import { FlipWords } from "./ui/flip-words";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  const words = ["Hindustani", "Traditional", "Classical"];
  return (
    <div style={{ backgroundImage: "url(/bg.png)" }} className="">
      <Navbar/>
      <main className="main  pb-32 text-black">
      <section className="section banner banner-section">
        <div className="container banner-column ml-[-2rem]">
          
          <div className="banner-inner">
            <h1 className="heading-xl text-[#612B00] font-mono">Transform Your Passion Into Performance: Explore <br></br> <FlipWords words={words}/>  Music <br/>With Salman Usmani</h1>
            <p className="paragraph text-black">
            <WordPullUp
      className="text-xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-xl "
      words="Book Your Free Demo Today!"
    />
            </p>
            <button className="px-5 py-3 rounded-full bg-[#5c4c23] text-white shadow-lg">
              Join Now
            <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <img
            className="banner-image"
            src="/herobg.png"
            alt="banner"
          />
          <div className="banner-links">
            <a href="#" title="Facebook"><FaFacebook size={24} /></a>
            <a href="#" title="Instagram"><FaInstagram size={24} /></a>
            <a href="#" title="Twitter"><FaTwitter size={24} /></a>
            <a href="#" title="YouTube"><FaYoutube size={24} /></a>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};

export default Hero;
