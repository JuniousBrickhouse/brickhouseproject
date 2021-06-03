
import juniousGray from '.././photos/JuniousGrey.jpeg'
import { CONTENT } from './journeyContent'

const JourneyIntro = ({ showJourneyAnimation, firstLineRef }) => {
//   console.log('lineRef', lineRef)
  console.log('showAnimation', showJourneyAnimation.firstLineAnimation)

  return (
    <>
      <div className='bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
          <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
            <div>
              {/* <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>Case Study</h2> */}
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins'>
                Junious Brickhouse
              </h3>
            </div>
          </div>
          <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
            <div className='relative lg:row-start-1 lg:col-start-2'>
              <svg
                className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'
                aria-hidden='true'
              >
                <defs>
                  <pattern
                    id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'
                  >
                    <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
              </svg>
              <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                <figure>
                  <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                    <img
                      className='rounded-lg shadow-lg object-cover object-center'
                      src={juniousGray}
                    // 'https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80'
                      alt='Whitney leaning against a railing on a downtown street'
                      width={1184}
                      height={1376}
                    />
                  </div>
                  {/* <figcaption className='mt-3 flex text-sm text-gray-500'>
                  <CameraIcon className='flex-none w-5 h-5 text-gray-400' aria-hidden='true' />
                  <span className='ml-2'>Photograph by Marcus O’Leary</span>
                </figcaption> */}
                </figure>
                {showJourneyAnimation.firstLineAnimation &&
                  <span ref={firstLineRef}>
                    <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                      <line
                        x1='20' y1='0' x2='20' y2='80' stroke='black' className='path'
                      />
                    </svg>
                  </span>}
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                <p className='text-lg text-gray-500'>
                  {CONTENT.intro}
                </p>
              </div>
              <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                <p>
                  {CONTENT.childhood}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JourneyIntro
