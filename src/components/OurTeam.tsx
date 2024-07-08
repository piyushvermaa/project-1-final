import React from 'react'
import Team from './TeamCard'
import LetterPullup from './magicui/letter-pullup'

const OurTeam = () => {
  return (
    <div className="w-full relative" style={{ backgroundImage: "url(/bg.png)" }}>
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <div id="title">
        <LetterPullup words={"Our Team"} delay={0.05} className="text-[#612B00]" />

        </div>
      <Team/>
    </div>
  )
}

export default OurTeam
