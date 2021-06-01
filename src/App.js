import { useRef, useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import smoothscroll from 'smoothscroll-polyfill'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import Videos from './components/Videos'
import DividerOne from './components/DividerOne'
import DividerTwo from './components/DividerTwo'
import useBioAnimNavBtnOnScroll from './components/customComponents/useBioAnimNavBtnOnScroll'
import { changeCurrentStatus } from './components/helperFunctions'
import useVideoNavBtnOnScroll from './components/customComponents/useVideoNavBtnOnScroll'
import useOrgAfillNavBtnOnScroll from './components/customComponents/useOrgAfillNavBtnOnScroll'
import Socials from './Socials'
import Journey from './components/Journey'
import { Transition } from '@headlessui/react'
// import useHeaderAnimNavBtnOnScroll from './components/customComponents/useHeaderAnimNavBtnOnScroll'
// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const topRef = useRef(null)
  const bioRef = useRef(null)
  const videosRef = useRef(null)
  const hatsRef = useRef(null)
  // const targetAnimationRef = useRef([])
  const [renderJourney, setRenderJourney] = useState(false)
  const [showAnimation, setShowAnimation] = useState({
    headerAnimation: true,
    bioImage: false,
    landingPage: true,
    journeyPage: false
  })

  // group of custom components to handle the nav btn highlight
  // switch on scroll and to handle any animation on scroll.
  // Admittedly, this is the opposite of DRY, but I couldn't
  // figure out how to pass an array of useRef items to the
  // single custom component.
  // changeCurrentStatus is in helperFunction.js

  // useHeaderAnimNavBtnOnScroll(topRef, (triggered) => {
  //   changeCurrentStatus('topRef')
  // })

  // Have to use the bio custom componenet to trigger the nav btn
  // highlight change to topRef
  useBioAnimNavBtnOnScroll(bioRef, (triggered) => {
    if (triggered) {
      setShowAnimation(state => ({ ...state, bioImage: triggered }))
      changeCurrentStatus('bioRef')
    } else {
      setShowAnimation(state => ({ ...state, bioImage: triggered }))
      changeCurrentStatus('topRef')
    }
  })

  useVideoNavBtnOnScroll(videosRef, (triggered) => {
    changeCurrentStatus('videosRef')
  })

  useOrgAfillNavBtnOnScroll(hatsRef, (triggered) => {
    changeCurrentStatus('hatsRef')
  })

  const handleScroll = ref => {
    console.log('ref', ref)
    if (ref === 'topRef') {
      // changeCurrentStatus('topRef')
      return topRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'bioRef') {
      return bioRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'videosRef') {
      return videosRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'hatsRef') {
      return hatsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAnimation = (name, value) => {
    setShowAnimation(state => ({ ...state, [name]: !value }))
  }

  const handleRenderJourney = (destination) => {
    console.log('destination', destination)
    if (destination === 'journeyPage') {
      setShowAnimation(state => ({ ...state, landingPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, journeyPage: true }))
        setRenderJourney(!renderJourney)
      }, 2000)
    } else if (destination === 'landingPage') {
      setShowAnimation(state => ({ ...state, journeyPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, landingPage: true }))
        setRenderJourney(!renderJourney)
      }, 2000)
    }
  }

  if (renderJourney) {
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
        <Journey handleRenderJourney={handleRenderJourney} />
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
      className='h-screen'
    >
      <NavBar handleScroll={handleScroll} />
      <span ref={topRef}>
        <Header topRef={topRef} handleAnimation={handleAnimation} showAnimation={showAnimation} />
      </span>
      <span ref={bioRef}>
        <ShortBio showAnimation={showAnimation} handleRenderJourney={handleRenderJourney} />
      </span>
      <DividerOne />
      <span ref={videosRef}>
        <Videos />
      </span>
      <DividerTwo />
      <span ref={hatsRef}>
        <OrgAffiliations />
      </span>
      <Socials />
    </Transition>
  )
}

export default App
