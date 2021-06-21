// import { memo } from 'react'
import { VIDEOS } from './Lists'

// video screen sizes/ratios: 640x360; 480x270; 426x240; 320x180

function VideoCard ({ showAnimation }) {
  return (
    <>
      <ul className='hidden sm:grid md:hidden lg:grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center -mt-20 px-4'>
        {VIDEOS.map((video, idx) => (
          <li
            key={idx}
            className='col-span-1 bg-gray-50 rounded-lg w-max flex justify-center'
          >
            {/* <iframe id='ytplayer' title={video.title} src={video.videoUrl} frameBorder='0' width='426' height='240' type='text/html' className='p-0 shadow-2xl rounded-md' /> */}
            <iframe width='426' height='240' src={video.videoUrl} title={video.title} frameborder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
          </li>
        ))}
      </ul>
      <ul className='grid sm:hidden md:grid lg:hidden grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center -mt-20 px-4'>
        {VIDEOS.map((video, idx) => (
          <li
            key={idx}
            className='col-span-1 bg-gray-50 rounded-lg w-max flex justify-center'
          >
            <iframe id='ytplayer' title={video.title} src={video.videoUrl} frameBorder='0' width='320' height='180' type='text/html' className='p-0 shadow-2xl rounded-md' />
          </li>
        ))}
      </ul>
    </>
  )
}

export default VideoCard
