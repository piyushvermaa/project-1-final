"use client"
import React from 'react'
import Image from "next/image";
import { StickyScroll } from './ui/sticky-scroll-reveal';
import BlurIn from './magicui/blue-text';
import LetterPullup from './magicui/letter-pullup';



const content = [
  {
    title: "Who is Salman Usmani?",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Achievements",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Performance",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Experience",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];


const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center p-10' style={{ backgroundImage: "url(/bg.png)" }}>
      <div id="title">
        <LetterPullup words={"About Us"} delay={0.05} className="text-[#612B00]" />

        </div>
      <div className='max-w-[1080px] text-[#612B00] mt-10'>
      <BlurIn
      word="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, aperiam possimus?  Numquam delectus dolorem quos sunt ex porro perferendis autem odit nobis voluptatum inventore, minus quaerat fuga dolore! Ab assumenda neque recusandae fuga odio totam voluptatem velit rerum sed sit voluptatibus illum molestiae iste suscipit placeat, vero laudantium, quia quaerat perspiciatis praesentium aperiam natus. Culpa assumenda quidem labore."
      className=" text-[#612B00]"
    />

      </div>
      <div className='mt-10'>

      <StickyScroll content={content} />
      </div>
    </div>
  )
}

export default About
