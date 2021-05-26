import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import OrgAffiliations from './components/OrgAffiliations'
import ShortBio from './components/ShortBio'
import VideoMobile from './components/VideoMobile'

function App () {
  return (
    <div className='h-screen'>
      <NavBar />
      <Header />
      <ShortBio />
      <VideoMobile />
      <OrgAffiliations />
    </div>
  )
}

export default App
