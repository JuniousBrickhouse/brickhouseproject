import VideoCard from './VideoCard'
import VideoCarousel from './videoCarousel/VideoCarousel'

export default function VideoMobile ({ showAnimation }) {
  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 w-full h-screen'>
        <VideoCard showAnimation={showAnimation} />
      </div>
      {/* <div className='max-w-7xl mx-auto px-4 lg:px-8 w-full h-screen'>
        <VideoCarousel />
      </div> */}
    </>
  )
}
