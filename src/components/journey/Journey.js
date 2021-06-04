import { useEffect, useState } from 'react'
import JourneyIntro from './JourneyIntro'
import JourneyNav from './JourneyNav'
import JourneyArmy from './JourneyArmy'
import useDocumentScrollThrottle from '../customComponents/useDocumentScrollThrottle'

export default function Journey ({ triggerPageChangeAnimation }) {
  const [navBtnFade, setNavBtnFade] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottle(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setNavBtnFade(currentScrollTop > 2)

    setTimeout(() => {
      setNavBtnFade(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <>
      <JourneyNav triggerPageChangeAnimation={triggerPageChangeAnimation} navBtnFade={navBtnFade} />
      <JourneyIntro />
      <JourneyArmy />
    </>
  )
}
