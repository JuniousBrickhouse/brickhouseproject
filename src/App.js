import { useLayoutEffect, useRef, useState } from 'react'
import './App.css'
import smoothscroll from 'smoothscroll-polyfill'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import VideoMobile from './components/VideoMobile'
import DividerOne from './components/DividerOne'
import DividerTwo from './components/DividerTwo'
import useBioAnimNavBtnOnScroll from './components/customComponents/useBioAnimNavBtnOnScroll'
import { changeCurrentStatus } from './components/helperFunctions'
import useVideoNavBtnOnScroll from './components/customComponents/useVideoNavBtnOnScroll'
import useOrgAfillNavBtnOnScroll from './components/customComponents/useOrgAfillNavBtnOnScroll'
import Socials from './Socials'
import useWindowScrollPosition from './components/customComponents/useWindowScrollPosition'
// import useHeaderAnimNavBtnOnScroll from './components/customComponents/useHeaderAnimNavBtnOnScroll'
// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const topRef = useRef(null)
  const bioRef = useRef(null)
  const videosRef = useRef(null)
  const hatsRef = useRef(null)
  const targetAnimationRef = useRef([])
  // const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [showAnimation, setShowAnimation] = useState({
    bioImage: false
  })

  // console.log('topRef', topRef)
  // console.log('bioRef', bioRef)
  // console.log('videosRef', videosRef)
  // console.log('hatsRef', hatsRef)

  useWindowScrollPosition('App_ScrollY', isLoading)

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch('https://your-api-url-here.com')
  //     setData(data)
  //     setIsLoading(false)
  //   } catch (error) {
  //     console.log(error)
  //     setIsLoading(false)
  //   }
  // }
  // useEffect(() => {
  //   if (!data) {
  //     fetchData()
  //   }
  // })

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

  return (
    <div className='h-screen'>
      <NavBar handleScroll={handleScroll} />
      <span ref={topRef}>
        <Header topRef={topRef} />
      </span>
      <span ref={bioRef}>
        <ShortBio showAnimation={showAnimation} targetAnimationRef={targetAnimationRef} />
      </span>
      <DividerOne />
      <span ref={videosRef}>
        <VideoMobile showAnimation={showAnimation} />
      </span>
      <DividerTwo />
      <span ref={hatsRef}>
        <OrgAffiliations />
      </span>
      <Socials />
    </div>
  )
}

export default App
