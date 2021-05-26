
const VIDEOS = [
  {
    title: 'NCTA Reflections 2020',
    videoUrl:
      'https://www.youtube.com/embed/hy1eClkGDp0'
  },
  {
    title: 'World Learning Seeing Ourselves in Others 2020',
    videoUrl:
        'https://www.youtube.com/embed/5sM2DhPpoBA'
  },
  {
    title: 'Next Level Senegal 2014',
    videoUrl:
        'https://www.youtube.com/embed/aZmX-PY763g'
  },
  {
    title: 'NEA Art Works 2019',
    videoUrl:
        'https://www.youtube.com/embed/O1KDlzim_OE'
  },
  {
    title: 'Library of Congress UA 2017',
    videoUrl:
        'https://www.youtube.com/embed/_G7qnXmrBBU'
  },
  {
    title: 'With Phil Wiggins at LOC 2014',
    videoUrl:
        'https://www.youtube.com/embed/CAKUVWIhbBU'
  },
  {
    title: 'Voices of America 2012',
    videoUrl:
        'https://www.youtube.com/embed/cL5CjowoGfc'
  },
  {
    title: 'Junious Brickhouse Thessaloniki 2013',
    videoUrl:
        'https://youtube.com/embed/tkQgEZ4SFmo'
  }

]

// video screen sizes/ratios: 640x360; 480x270

export default function VideoCard () {
  return (
    <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2'>
      {VIDEOS.map((video, idx) => (
        <li
          key={idx}
          className='col-span-1 bg-white rounded-lg w-full'
        >
          <iframe id='ytplayer' title={video.title} src={video.videoUrl} frameborder='0' width='480' height='270' type='text/html' />
        </li>
      ))}
    </ul>
  )
}
