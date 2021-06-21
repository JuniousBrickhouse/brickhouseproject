import { useEffect, useState } from 'react'
import JourneyNav from './JourneyNav'
import JourneyArmy from './JourneyArmy'
import JourneyUrbanArtistry from './JourneyUrbanArtistry'
import JourneyNextLevel from './JourneyNextLevel'
// import JourneyAccomplishments from './JourneyAccomplishments'
import useJourneyIntroOnScreen from '../customComponents/useJourneyIntroOnScreen'
import JourneyIntro from './JourneyIntro'
import Socials from '../../Socials'
import JourneyAssassins from './JourneyAssassins'
import DjScottyDivider from './DjScottyDivider'
import HatBillUpDivider from './HatBillUpDivider'
import JourneyMother from './JourneyMother'
import SpiritualDivider from './SpiritualDivider'
import Accomplishments2 from './Accomplishments2'
import EndJourneyTwo from './EndJourneyTwo'

export default function Journey ({ triggerPageChangeAnimation }) {
  const [navBtnFade, setNavBtnFade] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [introRef, journeyIntroIsVisible] = useJourneyIntroOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.78
  })

  useEffect(() => {
    if (journeyIntroIsVisible) {
      setNavBtnFade(false)
    } else {
      setNavBtnFade(true)
    }
  }, [journeyIntroIsVisible])

  return (
    <div>
      <JourneyNav triggerPageChangeAnimation={triggerPageChangeAnimation} navBtnFade={navBtnFade} />
      <main className='h-screen overflow-x-hidden overflow-y-auto perspective'>
        <span ref={introRef}>
          <JourneyIntro />
        </span>

        <JourneyMother />

        <section className='relative h-screen preserve3d'>
          <SpiritualDivider />
        </section>

        <span>
          <JourneyArmy />
        </span>

        <section className='relative h-screen preserve3d'>
          <DjScottyDivider />
        </section>

        <span className=''>
          <JourneyAssassins />
        </span>

        <span className=''>
          <JourneyUrbanArtistry />
        </span>

        <section className='relative h-60 bg-gray-500 bg-opacity-30 sm:bg-none sm:bg-opacity-0 sm:h-screen preserve3d'>
          <HatBillUpDivider />
        </section>

        <JourneyNextLevel />

        {/* <JourneyAccomplishments triggerPageChangeAnimation={triggerPageChangeAnimation} /> */}

        {/* <Accomplishments2 triggerPageChangeAnimation={triggerPageChangeAnimation} /> */}
        <section className='relative h-60 bg-gray-500 bg-opacity-30 sm:bg-none sm:bg-opacity-0 sm:h-screen preserve3d'>
          <EndJourneyTwo />
        </section>

        <Socials />
      </main>
    </div>
  )
}
