import './App.css'
import smoothscroll from 'smoothscroll-polyfill'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import VideoMobile from './components/VideoMobile'
import { useLayoutEffect, useRef, useState } from 'react'
import useDocumentScrollThrottle from './components/customeComponents/useDocumentScrollThrottle'
import { changeCurrentStatus } from './components/helperFunctions'

// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const topRef = useRef(null)
  const bioRef = useRef(null)
  const videosRef = useRef(null)
  const hatsRef = useRef(null)
  const [showAnimation, setShowAnimation] = useState({
    bioImage: false,
    videosImage: false
  })

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top
    const headerPos = topPos(topRef.current)
    const bioPos = topPos(bioRef.current)
    const videosPos = topPos(videosRef.current)
    const hatsPos = topPos(hatsRef.current)
    console.log('topPos', topPos)
    console.log('headerPos', headerPos)
    console.log('bioPos', bioPos)
    console.log('bioRef.current', bioRef.current)
    console.log('videosPos', videosPos)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      console.log('scrollPos', scrollPos)
      if (scrollPos < bioPos) {
        changeCurrentStatus('topRef')
      } else if (bioPos < scrollPos) {
        setShowAnimation(state => ({ ...state, bioImage: true }))
        changeCurrentStatus('bioRef')
      } else if (videosPos < scrollPos) {
        setShowAnimation(state => ({ ...state, videosImage: true }))
        changeCurrentStatus('videosRef')
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const handleAnimationOnScroll = (ref) => {
    if (ref === 'bioRef') {
      setShowAnimation(true)
    }
  }

  return (
    <div className='h-screen'>
      <NavBar handleScroll={handleScroll} />
      <span ref={topRef}>
        <Header />
      </span>
      <span ref={bioRef}>
        <ShortBio showAnimation={showAnimation} />
      </span>
      <span ref={videosRef}>
        <VideoMobile showAnimation={showAnimation} />
      </span>
      <span ref={hatsRef}>
        <OrgAffiliations />
      </span>
    </div>
  )
}

export default App
