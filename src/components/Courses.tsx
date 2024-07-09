import React from 'react';
import LetterPullup from './magicui/letter-pullup';

// CourseCard component defined within Courses component
type CourseCardProps = {
  title: string;
  imageSrc: string;
  description: string;
  price: string;
};

const CourseCard = ({ title, imageSrc, description, price }: CourseCardProps) => {
  return (
    <div className="relative w-[19.125rem] flex flex-col justify-center items-center text-center overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <img className="w-full h-[34.25rem] object-contain" alt="" src={imageSrc} />
      <div className="absolute top-[20rem] text-black text-center inline-block w-[12.688rem] h-[3.125rem] text-[1rem]">
        {title}
      </div>
      <div className="absolute top-[8rem] left-[2rem] bg-gray-700 w-[15.375rem] h-[10.313rem]" />
      <div className="absolute top-[23rem] left-[6rem] text-black font-kaisei-harunoumi w-[7.125rem] h-[2.188rem]">
        {price}
      </div>
      <div className="absolute top-[26rem] left-[3.5rem] shadow-md rounded-lg bg-[#a18424] w-[11.875rem] h-[3.438rem] flex items-center justify-center py-[0.375rem] px-[1.5rem] box-border font-space-grotesk hover:bg-[#7d6224] hover:scale-110 transition duration-300">
        <div className="relative font-medium">Enroll</div>
      </div>
    </div>
  );
}

const Courses = () => {
  // Array of course data
  const coursesData = [
    {
      id: 1,
      title: 'Tabla Tunes: Mastering the Rhythms',
      imageSrc: '/vector-31.svg',
      description: 'Master the art of playing Tabla.',
      price: 'Rs-.....',
    },
    {
      id: 2,
      title: 'Vocal Velocity: Journey to Vocal Excellence',
      imageSrc: '/vector-32.svg',
      description: 'Enhance your vocal abilities.',
      price: 'Rs-.....',
    },
    {
      id: 3,
      title: 'Melodies of Sitar',
      imageSrc: '/vector-31.svg',
      description: 'Explore the beautiful melodies of Sitar.',
      price: 'Rs-.....',
    },
    {
      id: 4,
      title: 'Guitar Essentials',
      imageSrc: '/vector-31.svg',
      description: 'Learn the essentials of playing Guitar.',
      price: 'Rs-.....',
    },
    // Add more courses as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center " style={{ backgroundImage: "url(/bg.png)" }}>
      <div className="w-full relative h-full bg-cover bg-[top] max-w-[1080px] text-left text-[1.25rem] text-gray-300 font-pacifico justify-center items-center" >
        <div id="title">
          <LetterPullup words={"Courses"} delay={0.05} className="text-[#612B00]" />
        </div>
        <div className="flex flex-wrap justify-center mt-10 pb-12 gap-8 px-4">
          {/* Map over coursesData and render CourseCard for each course */}
          {coursesData.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              imageSrc={course.imageSrc}
              description={course.description}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
