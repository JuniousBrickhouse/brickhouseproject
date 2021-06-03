import { useEffect } from 'react'
import JourneyIntro from './JourneyIntro'
import JourneyNav from './JourneyNav'
import JourneyArmy from './JourneyArmy'

export default function Journey ({ triggerPageChangeAnimation, showSolidNav }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <JourneyNav triggerPageChangeAnimation={triggerPageChangeAnimation} showSolidNav={showSolidNav} />
      <JourneyIntro />
      <JourneyArmy />
    </>
  )
}
