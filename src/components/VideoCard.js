import { VIDEOS } from './Lists'

// video screen sizes/ratios: 640x360; 480x270

export default function VideoCard () {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 mt-4'>
      {VIDEOS.map((video, idx) => (
        <li
          key={idx}
          className='col-span-1 bg-white rounded-lg w-full flex justify-center'
        >
          <iframe id='ytplayer' title={video.title} src={video.videoUrl} frameBorder='0' width='480' height='270' type='text/html' />
        </li>
      ))}
    </ul>
  )
}
