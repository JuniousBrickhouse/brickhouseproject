import VideoCard from './VideoCard'

export default function Videos () {
  return (
    <>
      <div className='mx-auto w-full pb-20 bg-gray-50 z-50'>

        <div className='bg-daviesGrey w-full'>
          <div className='w-full mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between'>
            <div className='max-w-xl'>
              <h2 className='text-4xl font-extrabold text-wildBlueYonder font-poppins sm:text-5xl sm:tracking-tight lg:text-6xl pb-20'>
                Videos
              </h2>
              {/* <p className='mt-5 text-xl text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At qui illum dolorum cum voluptate? Repellat ducimus ipsa exercitationem corrupti eum saepe id! Temporibus veniam exercitationem neque excepturi voluptatem ut repudiandae!
              </p> */}
            </div>
          </div>
        </div>
        <span className=''>
          <VideoCard />
        </span>
      </div>
    </>
  )
}
