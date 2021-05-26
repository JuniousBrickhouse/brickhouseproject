import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import VideoMobile from './components/VideoMobile'

function App () {
  return (
    <div className='h-full'>
      <NavBar />
      <Header />
      <VideoMobile />
    </div>
  )
}

export default App
