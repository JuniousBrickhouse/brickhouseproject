import VideoCard from './VideoCard'
// import VideoCarousel from './videoCarousel/VideoCarousel'

export default function Videos () {
  return (
    <>
      <div className='mx-auto w-full h-auto pb-20 bg-gray-50'>

        <div className='bg-woodGray w-full z-30'>
          <div className='w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-extrabold text-mediumCarmine font-poppins sm:text-5xl sm:tracking-tight lg:text-6xl'>
                Videos
              </h2>
              <p className='mt-5 text-xl text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui illum dolorum cum voluptate? Repellat ducimus ipsa exercitationem corrupti eum saepe id! Temporibus veniam exercitationem neque excepturi voluptatem ut repudiandae!
              </p>
            </div>
          </div>
        </div>
        <span className=''>
          <VideoCard />
        </span>
      </div>
      {/* <div className='max-w-7xl mx-auto px-4 lg:px-8 w-full h-screen'>
        <VideoCarousel />
      </div> */}
    </>
  )
}
