import { useEffect } from 'react'
import juniousGray from './photos/JuniousGrey.jpeg'

export default function Journey ({ triggerPageChangeAnimation }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
        <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
          <div>
            {/* <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>Case Study</h2> */}
            <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins'>
              Junious Brickhouse
            </h3>
            <button
              onClick={() => triggerPageChangeAnimation('')}
              type='button'
              className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mediumCarmine hover:bg-sonicSilver focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Go Back
            </button>
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
            </div>
          </div>
          <div className='mt-8 lg:mt-0'>
            <div className='text-base max-w-prose mx-auto lg:max-w-none'>
              <p className='text-lg text-gray-500'>
                Junious “House” Brickhouse is an internationally established educator, choreographer and cultural preservationist with over 30 years of experience in urban dance culture.  At age 18, Junious Brickhouse embarked on an over 20-year career as a logistics professional in the U.S. Army and later as a Department of Defense contractor.  Throughout this time in various international assignments, Junious developed both a military and dance career, eventually rising to positions of leadership and responsibility in both areas. The logistics skills and leadership acumen Junious honed in his military work provide a solid and unique foundation as a leader and facilitator in the dance world. As Founder and Executive Director of Urban Artistry Inc. (www.urbanartistry.org).  Junious has inspired and created a movement of artists dedicated to the authentic preservation of urban dance culture, specifically within communities of practice. While constantly engaged in research about urban dance culture and the communities from which it evolved, Junious created projects such as The Preservatory and the UA Digital Archives to encourage other artists to research and document these tradition bearers and their stories.
              </p>
            </div>
            <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
              <p>
                Brickhouse brought his expertise to Next Level in 2014, its inaugural season, as an Artist Educator for the Senegal program. The potential to serve global communities and shape the global future of Hip Hop inspired Brickhouse to continue to work with Next Level. Since then, Brickhouse has contributed his knowledge and skill to building the program as a Consultant, Site Manager, Associate Director, Co-Director, and now Director.

              </p>
              <p>
                Brickhouse continues to serve as Executive Director of Urban Artistry, which was recently featured at the Library of Congress and the National Museum of African American History. He also sits on advisory panels for the National Endowment for the Arts and The American Folklore Society. As a member of Phil Wiggins Blues House Party, Brickhouse takes part in performances and educational programs, sharing the connection between blues music and dance.
              </p>
              <p>
                Junious Brickhous is a:
              </p>
              <ul>
                <li>Next Level Director.</li>
                <li>Dancer.</li>
                <li>Citizen folklorist.</li>
                <li>Educator.</li>
                <li>Logistician.</li>
                <li>Diplomat.</li>
                <li>Veteran.</li>
              </ul>
              <p>
                With 20 years of professional experience in arts education, entrepreneurship, and conflict resolution. Junious founded Urban Artistry in 2005, as it’s Executive Director. In that role, he has created programming used around the world to teach the next generation of Urban Dancers. Through Urban Artistry’s Preservatory Project, Junious has also created an archive for preserving the legacy of Urban Dance culture.
              </p>
              <h3>How we helped</h3>
              <p>
                Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam.
                Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa,
                lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.
              </p>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
