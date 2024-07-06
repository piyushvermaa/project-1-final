import React from 'react';

interface TeamCardProps {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, position, description, imageUrl, githubUrl, twitterUrl, instagramUrl }) => {
  return (
    <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-10 sm:mb-10 xl:max-w-sm lg:w-2/5 ">
      <div className="overflow-hidden  bg-[#fbf8f2ad] rounded-3xl shadow-lg">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img src={imageUrl} alt={`Display Picture of ${name}`} role="img" className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-6 mt-16">
          <h1 className="font-bold text-3xl text-center font-lobster-two mb-1">{name}</h1>
          <p className="text-gray-800 text-sm text-center">{position}</p>
          <p className="text-center text-gray-600 text-base pt-3 font-normal">{description}</p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href={githubUrl} className="mx-5" aria-label="Github" role="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href={twitterUrl} className="mx-5" aria-label="Twitter" role="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href={instagramUrl} className="mx-5" aria-label="Instagram" role="img">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TeamMember {
  name: string;
  position: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Andres Berlin',
      position: 'Chief Executive Officer',
      description: "The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharin",
      imageUrl: 'https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif',
      githubUrl: 'javascript:void(0)',
      twitterUrl: 'javascript:void(0)',
      instagramUrl: 'javascript:void(0)',
    },
    {
      name: 'Silene Tokyo',
      position: 'Product Design Head',
      description: 'The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchm',
      imageUrl: 'https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif',
      githubUrl: 'javascript:void(0)',
      twitterUrl: 'javascript:void(0)',
      instagramUrl: 'javascript:void(0)',
    },
    {
      name: 'Johnson Stone',
      position: 'Manager Development',
      description: 'Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can ',
      imageUrl: 'https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif',
      githubUrl: 'javascript:void(0)',
      twitterUrl: 'javascript:void(0)',
      instagramUrl: 'javascript:void(0)',
    },
    {
      name: 'Dean Jones',
      position: 'Principal Software Engineer',
      description: 'An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.',
      imageUrl: 'https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg',
      githubUrl: 'javascript:void(0)',
      twitterUrl: 'javascript:void(0)',
      instagramUrl: 'javascript:void(0)',
    },
  ];

  return (
    <div className="flex flex-col justify-center mx-auto pt-16">
      <div className="p-10 flex flex-wrap ">
        <div className="mx-auto">
          <div className="flex items-center flex-wrap justify-center gap-10 max-w-[1200px]">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                position={member.position}
                description={member.description}
                imageUrl={member.imageUrl}
                githubUrl={member.githubUrl}
                twitterUrl={member.twitterUrl}
                instagramUrl={member.instagramUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
