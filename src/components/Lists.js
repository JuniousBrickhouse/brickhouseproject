import reflections from './photos/youTubeThumbnails/reflections.png'
import seeingOurselves from './photos/youTubeThumbnails/seeingOurselves.png'
import senegal from './photos/youTubeThumbnails/senegal.png'
import podcast from './photos/youTubeThumbnails/podcast.png'
import urbanArtistry from './photos/youTubeThumbnails/urbanArtistry.png'
import philWiggins from './photos/youTubeThumbnails/philWiggins.png'
import voices from './photos/youTubeThumbnails/voices.png'
import flavArt from './photos/youTubeThumbnails/flavArt.png'

export const VIDEOS = [
  {
    title: 'NCTA Reflections 2020',
    videoUrl:
        'https://www.youtube.com/embed/hy1eClkGDp0?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/hy1eClkGDp0/maxresdefault.jpg',
    customThumbnail: reflections
  },
  {
    title: 'World Learning Seeing Ourselves in Others 2020',
    videoUrl:
          'https://www.youtube.com/embed/5sM2DhPpoBA?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/5sM2DhPpoBA/hqdefault.jpg',
    customThumbnail: seeingOurselves
  },
  {
    title: 'Next Level Senegal 2014',
    videoUrl:
          'https://www.youtube.com/embed/aZmX-PY763g?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/aZmX-PY763g/maxresdefault.jpg',
    customThumbnail: senegal
  },
  {
    title: 'NEA Art Works 2019',
    videoUrl:
          'https://www.youtube.com/embed/O1KDlzim_OE?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/O1KDlzim_OE/maxresdefault.jpg',
    customThumbnail: podcast
  },
  {
    title: 'Library of Congress UA 2017',
    videoUrl:
          'https://www.youtube.com/embed/_G7qnXmrBBU?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/_G7qnXmrBBU/hqdefault.jpg',
    customThumbnail: urbanArtistry
  },
  {
    title: 'With Phil Wiggins at LOC 2014',
    videoUrl:
          'https://www.youtube.com/embed/CAKUVWIhbBU?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/CAKUVWIhbBU/maxresdefault.jpg',
    customThumbnail: philWiggins
  },
  {
    title: 'Voices of America 2012',
    videoUrl:
          'https://www.youtube.com/embed/cL5CjowoGfc?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/cL5CjowoGfc/hqdefault.jpg',
    customThumbnail: voices
  },
  {
    title: 'Junious Brickhouse Thessaloniki 2013',
    videoUrl:
          'https://youtube.com/embed/tkQgEZ4SFmo?autoplay=1&mute=0',
    thumbnail: 'http://i.ytimg.com/vi/tkQgEZ4SFmo/maxresdefault.jpg',
    customThumbnail: flavArt
  }
]

export const NAVIGATION = [
  { name: 'Home', ref: 'homeRef', current: true },
  { name: 'Bio', ref: 'bioRef', current: false },
  { name: 'Videos', ref: 'videosRef', current: false },
  { name: 'Hats', ref: 'orgsRef', current: false }
]
