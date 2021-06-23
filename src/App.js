import { useEffect, useRef, useState } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import NavBar from './components/NavBar'
import ParallaxHeader from './components/ParallaxHeader'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import Videos from './components/Videos'
import ParallaxDividerOne from './components/ParallaxDividerOne'
import ParallaxDividerTwo from './components/ParallaxDividerTwo'
import { changeCurrentStatus } from './components/helperFunctions'
import Socials from './Socials'
import Journey from './components/journey/Journey'
import { Transition } from '@headlessui/react'
import Contact from './components/Contact'
import useBioOnScreen from './components/customComponents/useBioOnScreen'
import useVideosOnScreen from './components/customComponents/useVideosOnScreen'
import useHomeOnScreen from './components/customComponents/useHomeOnScreen'

// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const dividerOneRef = useRef(null)
  const [showSolidNav, setShowSolidNav] = useState(false)
  const [renderDestination, setRenderDestination] = useState({
    destination: '',
    source: ''
  })
  const [showAnimation, setShowAnimation] = useState({
    headerAnimation: true,
    bioImage: false,
    homePage: true,
    journeyPage: false,
    contactPage: false
  })

  // This section is not DRY. Each ref is called inside its
  // own custom component. When it fires, the useEffect below
  // this section handles the necessary actions.
  const [homeRef, homeIsVisible] = useHomeOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })

  const [bioRef, bioIsVisible] = useBioOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  })

  const [videosRef, videosAreVisible] = useVideosOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  })

  const [orgsRef, orgsAreVisible] = useVideosOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  })

  useEffect(() => {
    if (homeIsVisible) {
      changeCurrentStatus('homeRef')
      setShowSolidNav(false)
    }
    if (bioIsVisible) {
      setShowAnimation(state => ({ ...state, bioImage: true }))
      changeCurrentStatus('bioRef')
      setShowSolidNav(true)
    } else {
      setShowAnimation(state => ({ ...state, bioImage: false }))
      // changeCurrentStatus('homeRef')
    }
    if (videosAreVisible) {
      changeCurrentStatus('videosRef')
    }
    if (orgsAreVisible) {
      changeCurrentStatus('orgsRef')
    }
  }, [homeIsVisible, bioIsVisible, videosAreVisible, orgsAreVisible, showSolidNav])

  // handles the scroll on click
  const handleScroll = ref => {
    if (ref === 'homeRef') {
      return homeRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'bioRef') {
      return bioRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'videosRef') {
      return videosRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'orgsRef') {
      return orgsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // This functions handles all the animation and page navigations.
  // It takes a destination and a source. The source is for the
  // navigation history to take a user back to the page they
  // were on. This method is needed since we are not changing the
  // url during page changes. Navigation buttons can be found in
  // JourneyNav.js, JourneyAccomplishments.js, NavBar.js. ShortBio.js.
  const triggerPageChangeAnimation = (destination, source) => {
    if (destination === 'journeyPage' && source === 'homePage') {
      setShowAnimation(state => ({ ...state, homePage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, journeyPage: true }))
        setRenderDestination(state => ({
          ...state,
          destination: destination,
          source: source
        }))
      }, 2000)
    } else if (destination === 'homePage' && (source === 'journeyPage' || source === 'contactPage')) {
      setShowAnimation(state => ({
        ...state,
        journeyPage: false,
        contactPage: false
      }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, homePage: true }))
        setRenderDestination(state => ({
          ...state,
          destination: destination,
          source: source
        }))
      }, 2000)
    } else if (destination === 'journeyPage' && source === 'contactPage') {
      setShowAnimation(state => ({ ...state, contactPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, journeyPage: true }))
        setRenderDestination(state => ({
          ...state,
          destination: destination,
          source: source
        }))
      }, 2000)
    } else if (destination === 'contactPage' && source === 'homePage') {
      setShowAnimation(state => ({ ...state, homePage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, contactPage: true }))
        setRenderDestination(state => ({
          ...state,
          destination: destination,
          source: source
        }))
      }, 2000)
    } else if (destination === 'contactPage' && source === 'journeyPage') {
      setShowAnimation(state => ({ ...state, journeyPage: false }))
      setTimeout(() => {
        setShowAnimation(state => ({ ...state, contactPage: true }))
        setRenderDestination(state => ({
          ...state,
          destination: destination,
          source: source
        }))
      }, 2000)
    }
  }

  if (renderDestination.destination === 'journeyPage') {
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

  if (renderDestination.destination === 'contactPage') {
    return (
      <Transition
        show={showAnimation.contactPage}
        enter='transform-opacity duration-3000'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transform-opacity duration-2000'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        className='overflow-visible'
        id='other'
      >
        <Contact triggerPageChangeAnimation={triggerPageChangeAnimation} renderDestination={renderDestination} />
      </Transition>
    )
  }

  return (
    <Transition
      show={showAnimation.homePage}
      enter='transform-opacity duration-1000'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transform-opacity duration-2000'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
      className='h-screen'
    >
      <NavBar handleScroll={handleScroll} showSolidNav={showSolidNav} triggerPageChangeAnimation={triggerPageChangeAnimation} />

      <main className='h-screen overflow-x-hidden overflow-y-auto perspective'>

        <section className='relative h-screen preserve3d' ref={homeRef}>
          <ParallaxHeader homeRef={homeRef} showAnimation={showAnimation} />
        </section>

        <span className='h-full' ref={bioRef} id='short-bio'>
          <ShortBio showAnimation={showAnimation} triggerPageChangeAnimation={triggerPageChangeAnimation} />
        </span>

        <section className='relative h-screen preserve3d z-0' ref={dividerOneRef} id='parallax'>
          <ParallaxDividerOne />
        </section>

        <span className='h-full' ref={videosRef} id='videos'>
          <Videos />
        </span>

        <section className='relative h-screen preserve3d'>
          <ParallaxDividerTwo />
        </section>

        <span ref={orgsRef} id='org-affiliation'>
          <OrgAffiliations triggerPageChangeAnimation={triggerPageChangeAnimation} />
        </span>

        <Socials />
      </main>
    </Transition>
  )
}

export default App
