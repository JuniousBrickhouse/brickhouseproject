import { useLayoutEffect, useRef, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import smoothscroll from 'smoothscroll-polyfill'
import Header from './components/Header'
import ParallaxDividerOne from './components/ParallaxDividerOne'
import ParallaxDividerTwo from './components/ParallaxDividerTwo'
import ParallaxHeader from './components/ParallaxHeader'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import Videos from './components/Videos'
// import DividerOne from './components/DividerOne'
// import DividerTwo from './components/DividerTwo'
import { changeCurrentStatus } from './components/helperFunctions'
import Socials from './Socials'
import Journey from './components/Journey'
import { Transition } from '@headlessui/react'
import useDocumentScrollThrottle from './components/customComponents/useDocumentScrollThrottle'
import Contact from './components/Contact'

// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const topRef = useRef(null)
  const bioRef = useRef(null)
  const videosRef = useRef(null)
  const hatsRef = useRef(null)
  const [showSolidNav, setShowSolidNav] = useState(false)
  const [renderDestination, setRenderDestination] = useState('')

  // const [renderJourney, setRenderJourney] = useState(false)
  // const [renderContact, setRenderContact] = useState(false)
  const [showAnimation, setShowAnimation] = useState({
    headerAnimation: true,
    bioImage: false,
    landingPage: true,
    journeyPage: false,
    contactPage: false
  })
  const [refOffsets, setRefOffsets] = useState({
    homeRefOffset: null,
    bioRefOffset: null,
    videosRefOffset: null,
    hatsRefOffset: null
  })

  // console.log('topRef', topRef)
  // console.log('bioRef', bioRef.current.offsetTop)
  // console.log('videosRef', videosRef.current.offsetTop)
  // console.log('hatsRef', hatsRef.current.offsetTop)
  // useLayoutEffect waits for the page to fully load before running. This allows the refs to
  // be current and not null. Because comparing the current scroll position to these
  // ref positions, I need to set them in the setRefOffsets state.
  useLayoutEffect(() => {
    setRefOffsets(state => ({
      ...state,
      homeRefOffset: topRef.current.offsetTop,
      bioRefOffset: bioRef.current.offsetTop,
      videosRefOffset: videosRef.current.offsetTop,
      hatsRefOffset: hatsRef.current.offsetTop
    }))
  }, [])

  // This scroll code is handling the scroll on click feature (triggered
  // in NavBar.js), the changing of the nav btns being highlighted, and
  // the animation on scroll.
  const currentScrollPosition = window.scrollY
  console.log(currentScrollPosition)

  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottle(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL
    const newScrollPosition = currentScrollTop + 550
    console.log('current scroll', currentScrollTop)
    if (newScrollPosition >= refOffsets.bioRefOffset) {
      setShowAnimation(state => ({ ...state, bioImage: true }))
      changeCurrentStatus('bioRef')
    } else {
      setShowAnimation(state => ({ ...state, bioImage: false }))
      changeCurrentStatus('topRef')
    }

    if (newScrollPosition >= refOffsets.videosRefOffset) {
      changeCurrentStatus('videosRef')
    }

    if (newScrollPosition >= refOffsets.hatsRefOffset) {
      changeCurrentStatus('hatsRef')
    }

    setShowSolidNav(currentScrollTop > 2)

    setTimeout(() => {
      setShowSolidNav(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })
  // handles the scroll on click
  const handleScroll = ref => {
    if (ref === 'topRef') {
      return topRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'bioRef') {
      return bioRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'videosRef') {
      return videosRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'hatsRef') {
      return hatsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const triggerPageChangeAnimation = (destination) => {
    // console.log('destination', destination)
    if (destination === 'journeyPage') {
      setShowAnimation(state => ({ ...state, landingPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, journeyPage: true }))
        setRenderDestination(destination)
        // setRenderJourney(!renderJourney)
      }, 2000)
    } else if (destination === '') {
      setShowAnimation(state => ({ ...state, journeyPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, landingPage: true }))
        setRenderDestination(destination)
        // setRenderJourney(!renderJourney)
        // setRenderContact(!renderContact)
      }, 2000)
    } else if (destination === 'contactPage') {
      setShowAnimation(state => ({ ...state, landingPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, contactPage: true }))
        setRenderDestination(destination)
        // setRenderContact(!renderContact)
      }, 2000)
    }
  }

  if (renderDestination === 'journeyPage') {
    return (
      <Transition
        show={showAnimation.journeyPage}
        enter='transform-opacity duration-3000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transform-opacity duration-2000'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Journey triggerPageChangeAnimation={triggerPageChangeAnimation} />
      </Transition>
    )
  }

  if (renderDestination === 'contactPage') {
    return (
      <Transition
        show={showAnimation.contactPage}
        enter='transform-opacity duration-3000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transform-opacity duration-2000'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Contact triggerPageChangeAnimation={triggerPageChangeAnimation} />
      </Transition>
    )
  }

  return (

    <Transition
      show={showAnimation.landingPage}
      enter='transform-opacity duration-1000'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transform-opacity duration-2000'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className='App h-screen'
    >
      <NavBar handleScroll={handleScroll} showSolidNav={showSolidNav} triggerPageChangeAnimation={triggerPageChangeAnimation} />
      <span ref={topRef}>
        <ParallaxHeader topRef={topRef} showAnimation={showAnimation} />
      </span>
      <span ref={bioRef}>
        <ShortBio showAnimation={showAnimation} triggerPageChangeAnimation={triggerPageChangeAnimation} />
      </span>
      <ParallaxDividerOne />
      <span ref={videosRef}>
        <Videos />
      </span>
      <ParallaxDividerTwo />
      <span ref={hatsRef}>
        <OrgAffiliations />
      </span>
      <Socials />
    </Transition>

  )
}

export default App
