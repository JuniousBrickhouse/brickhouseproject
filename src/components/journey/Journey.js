import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import JourneyIntro from './JourneyIntro'
import JourneyNav from './JourneyNav'
import JourneyArmy from './JourneyArmy'
import useDocumentScrollThrottle from '../customComponents/useDocumentScrollThrottle'

export default function Journey ({ triggerPageChangeAnimation }) {
  const firstLineRef = useRef()
  const [navBtnFade, setNavBtnFade] = useState(false)
  const [showJourneyAnimation, setShowJourneyAnimation] = useState({
    firstLineAnimation: false
  })
  const [journeyRefOffsets, setJourneyRefOffsets] = useState({
    firstLineRefOffset: null
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useLayoutEffect(() => {
    setTimeout(() => {
      setJourneyRefOffsets(state => ({
        ...state,
        firstLineRefOffset: firstLineRef.current.offsetTop
      }))
    }, 500)
  }, [])

  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottle(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL
    const journeyScrollPosition = currentScrollTop + 300
    // console.log('currentScrollTop', currentScrollTop)

    if (journeyScrollPosition >= journeyRefOffsets.firstLineRefOffset) {
      setShowJourneyAnimation(state => ({ ...state, firstLineAnimation: true }))
    } else {
      setShowJourneyAnimation(state => ({ ...state, firstLineAnimation: false }))
    }

    setNavBtnFade(currentScrollTop > 2)

    setTimeout(() => {
      setNavBtnFade(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <>
      <JourneyNav triggerPageChangeAnimation={triggerPageChangeAnimation} navBtnFade={navBtnFade} />
      <JourneyIntro firstLineRef={firstLineRef} showJourneyAnimation={showJourneyAnimation} />
      <JourneyArmy />
    </>
  )
}
