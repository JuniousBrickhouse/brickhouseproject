import './App.css'
import smoothscroll from 'smoothscroll-polyfill'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import VideoMobile from './components/VideoMobile'
import { useRef, useState } from 'react'
// import { changeCurrentStatus } from './components/helperFunctions'

// makes the scroll feature work on safari
smoothscroll.polyfill()

function App () {
  const topRef = useRef(null)
  const bioRef = useRef(null)
  const videosRef = useRef(null)
  const hatsRef = useRef(null)
  const [showImage, setShowImage] = useState(false)

  console.log('bioRef', bioRef)
  // console.log('videosRef', bioRef)
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

  const handleAnimationOnClick = (ref) => {
    if (ref === 'bioRef') {
      setShowImage(true)
    }
  }

  return (
    <div className='h-screen'>
      <NavBar handleScroll={handleScroll} handleAnimationOnClick={handleAnimationOnClick} />
      <span ref={topRef}>
        <Header />
      </span>
      <span ref={bioRef}>
        <ShortBio showImage={showImage} />
      </span>
      <span ref={videosRef}>
        <VideoMobile />
      </span>
      <span ref={hatsRef}>
        <OrgAffiliations />
      </span>
    </div>
  )
}

export default App
