import { CONTENT } from './journeyContent'
import doorNoReturn from '../photos/doorNoReturn.jpg'
import eg12D1Zr from '../photos/eg12D1Zr.jpeg'
import nextLevelMtnPose from '../photos/nextLevelMtnPose.jpeg'
import nubianClubCollaboration from '../photos/nubianClubCollaboration.jpeg'

export default function NewNextLevel () {
  return (
    <div className='relative bg-white'>
      <div className='lg:absolute lg:inset-0'>
        <div className='lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2'>
          <img
            className='hidden lg:block h-56 w-full object-cover lg:absolute lg:h-full'
            src={doorNoReturn}
            alt='Junious standing looking out of the Door of No Return on Goree Island.'
          />
          <img
            className='block lg:hidden h-full w-full object-cover lg:absolute lg:h-full'
            src={nubianClubCollaboration}
            alt='Nubian Club Collaboration.'
          />
          <blockquote className='block relative lg:hidden text-right bottom-8 pr-4 font-nunito text-richBlack bg-yNBlue bg-opacity-50'>
            Nubian Club Collaboration
          </blockquote>
        </div>
      </div>

      {/* <div className='z-50 bg-yNBlue -mt-6'>
        <blockquote className='block lg:hidden z-40  ml-6 font-nunito text-richBlack bg-yNBlue bg-opacity-50'>
          Nubian Club Collaboration
        </blockquote>
      </div> */}

      <div className='relative pt-12 pb-6 px-4 sm:pt-10 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2'>
        <div className='lg:col-start-2 lg:pl-8'>
          <div className='text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0 space-y-4'>
            <h3 className='mt-2 text-3xl leading-8 font-extrabold font-poppins tracking-tight text-gray-900 sm:text-4xl'>
              NEXT LEVEL
            </h3>
            <div className='flex-shrink-0'>
              <img
                className='h-full w-full object-cover object-right rounded-lg shadow-lg'
                src={nextLevelMtnPose}
                alt='Junious posing with youth in Sengal'
              />
            </div>
            <div className='mt-8 text-lg text-gray-500 font-nunito'>
              {CONTENT.nextLevel}
              <footer className='mt-2 w-max'>
                <p className='flex flex-col font-medium text-sm'>
                  <a
                    href='https://www.nextlevel-usa.org/junious-brickhouse'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='hover:text-glaucous text-wildBlueYonder'
                  >
                    Visit NEXT LEVEL
                  </a>
                </p>
              </footer>
            </div>
            <div className='flex-shrink-0'>
              <img
                className='h-full w-full object-cover object-right rounded-lg shadow-lg'
                src={eg12D1Zr}
                alt='Junious posing with youth in Sengal'
              />
            </div>
          </div>
        </div>
        <div className='hidden lg:grid col-start-1 justify-items-end'>
          <blockquote className='hidden lg:block w-1/2 bg-yNBlue bg-opacity-50 font-poppins font-bold rounded-l-md text-right text-platinum px-3 text-sm'>Looking out the &ldquo;Door of No Return&rdquo; on Goree Island, Senegal</blockquote>
        </div>
      </div>
    </div>
  )
}
