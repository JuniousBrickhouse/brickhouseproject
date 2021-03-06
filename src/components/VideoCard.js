import { useState } from 'react'
import { VIDEOS } from './Lists'

// video screen sizes/ratios: 640x360; 480x270; 426x240; 320x180

export default function VideoCard ({ showAnimation }) {
  const [playVideo, setPlayVideo] = useState(null)

  return (
    <>
      <ul className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center -mt-20 px-4'>
        {VIDEOS.map((video, idx) => (
          <li
            key={idx}
            className='relative col-span-1 rounded-md h-full w-full aspect-w-16 aspect-h-9'
          >
            {playVideo === idx
              ? <iframe id='ytplayer' title={video.title} src={video.videoUrl} frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='shadow-2xl rounded-md object-cover object-left' />
              : <img
                  src={video.customThumbnail}
                  alt={video.title}
                  className='shadow-2xl rounded-md object-cover object-center'
                  onClick={() => setPlayVideo(idx)}
                />}

          </li>
        ))}
      </ul>
    </>
  )
}
