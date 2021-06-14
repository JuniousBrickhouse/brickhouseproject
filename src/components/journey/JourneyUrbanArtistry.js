import urbanArtistry from '.././photos/UrbanA.jpeg'
import JuniousRedDance from '.././photos/JuniousRedDance.jpeg'
import { CONTENT } from './journeyContent'

const JourneyUrbanArtistry = () => {
  return (
    <>
      <div className='bg-yNBlue overflow-hidden preserve3d'>
        <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='hidden lg:block bg-daviesGrey absolute top-0 bottom-0 left-3/4 w-screen' />
          <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
            <div>
              <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins'>
                Urban Artistry
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
                    <rect x={0} y={0} width={4} height={4} className='text-platinum' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
              </svg>
              {/* >= lg screen sizes */}
              <div className='hidden lg:block relative text-base mx-auto max-w-prose lg:max-w-none lg:-ml-8 lg:mr-8 xl:-ml-0 xl:mr-0'>
                <figure>
                  <div className='aspect-w-22 aspect-h-17 lg:aspect-none UA-parallax' aria-hidden='true'>
                    <img
                      className='rounded-lg shadow-lg object-cover object-center bg-50'
                      src={urbanArtistry}
                      alt='Junious in front of Urban Artistry Sign'
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
              {/* <= md screen sizes */}
              <div className='lg:hidden relative text-base mx-auto max-w-prose'>
                <figure>
                  <div className='aspect-w-22 aspect-h-17'>
                    <img
                      className='rounded-lg shadow-lg object-cover object-center bg-50'
                      src={urbanArtistry}
                      alt='Junious in front of Urban Artistry Sign'
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className='mt-8 lg:mt-0'>
              <div className='text-base max-w-prose mx-auto lg:max-w-none'>
                <p className='text-lg text-platinum'>
                  {CONTENT.urbanArtistry}
                </p>
              </div>
              {/* >= lg screen sizes */}
              <div className='hidden lg:block lg:text-base mx-auto max-w-prose lg:max-w-none mt-8 lg:mt-32 lg:-mr-28 lg:ml-28 xl:-mr-36 xl:ml-36'>
                <figure>
                  <div
                    className='aspect-w-22 aspect-h-17 lg:aspect-none red-dance-parallax'
                    aria-hidden='true'
                  >
                    <img
                      className='rounded-lg shadow-lg object-cover object-center bg-50'
                      src={JuniousRedDance}
                      alt='Junious in front of Urban Artistry Sign'
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
              {/* <= md screen sizes */}
              <div className='lg:hidden mx-auto max-w-prose mt-8'>
                {/* lg:-mt-96 lg:-ml-32  lg:mr-32 xl:-ml-44 xl:mr-44 */}
                <figure>
                  <div
                    className='aspect-w-22 aspect-h-17 lg:aspect-none'
                  >
                    <img
                      className='rounded-lg shadow-lg object-cover object-center bg-50 '
                      src={JuniousRedDance}
                      alt='Junious in front of Urban Artistry Sign'
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JourneyUrbanArtistry
