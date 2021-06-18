import RenderInBrowser from 'react-render-in-browser'
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
                    <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)' />
              </svg>
              {/* >= lg screen sizes */}
              <RenderInBrowser except safari>
                <div className='hidden lg:block text-base mx-auto max-w-prose lg:max-w-none lg:-ml-8 lg:mr-8 xl:-ml-0 xl:mr-0'>
                  <section className='relative'>
                    <div className='aspect-w-22 aspect-h-17 lg:aspect-none UA-parallax' aria-hidden='true'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center bg-50'
                        src={urbanArtistry}
                        alt='Junious in front of Urban Artistry Sign'
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </section>
                </div>
              </RenderInBrowser>
              <RenderInBrowser safari only>
                <div className='hidden lg:block relative text-base mx-auto max-w-prose lg:max-w-none z-50'>
                  <figure>
                    <div className='aspect-w-22 aspect-h-17 lg:aspect-none z-50'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src={urbanArtistry}
                        alt='Junious in front of Urban Artistry Sign'
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </figure>
                </div>
              </RenderInBrowser>
              {/* <= md screen sizes */}
              <div className='lg:hidden relative text-base mx-auto max-w-prose lg:max-w-none'>
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
                <footer className='mt-6 w-max'>
                  <p className='flex flex-col font-medium'>
                    <a
                      href='https://urbanartistry.org/'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='hover:text-glaucous text-wildBlueYonder'
                    >
                      Visit Urban Artistry
                    </a>
                  </p>
                </footer>
              </div>
              {/* >= lg screen sizes */}
              <RenderInBrowser except safari>
                <div className='hidden lg:block relative lg:text-base mx-auto max-w-prose lg:max-w-none mt-8 lg:mt-14 lg:-mr-28 lg:ml-28 xl:-mr-36 xl:ml-36'>
                  <section className='relative' aria-hidden='true'>
                    <div
                      className='aspect-w-22 aspect-h-17 lg:aspect-none red-dance-parallax'
                    >
                      <img
                        className='rounded-lg shadow-lg object-cover object-center bg-50'
                        src={JuniousRedDance}
                        alt='Junious in front of Urban Artistry Sign'
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </section>
                </div>
              </RenderInBrowser>
              <RenderInBrowser safari only>
                <div className='hidden lg:block relative lg:text-base mx-auto max-w-prose lg:max-w-none mt-10'>
                  <section className='relative' aria-hidden='true'>
                    <div
                      className='aspect-w-22 aspect-h-17 lg:aspect-none'
                    >
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src={JuniousRedDance}
                        alt='Junious in front of Urban Artistry Sign'
                        width={1184}
                        height={1376}
                      />
                    </div>
                  </section>
                </div>
              </RenderInBrowser>
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
