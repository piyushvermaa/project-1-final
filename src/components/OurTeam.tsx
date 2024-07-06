import React from 'react'
import Team from './TeamCard'

const OurTeam = () => {
  return (
    <div className="w-full relative" style={{ backgroundImage: "url(/bg.png)" }}>
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <div className="text-[3.313rem] text-center font-lobster-two text-base-50  w-full">
        Our Team
      </div>
      <Team/>
    </div>
  )
}

export default OurTeam
