import crewVsan from '../photos/CrewVsan.jpeg'
import crewLil from '../photos/CrewLil.gif'
import juniousCrew from '../photos/JuniousCrew.gif'
import assassinsDC2013 from '../photos/assassinsDC2013.jpg'
import assassinsJuniousPose from '../photos/assassinsJuniousPose.jpg'
import { CONTENT } from './journeyContent'

export default function Assassins () {
  return (
    <div className='relative bg-sonicSilver bg-cover pt-16 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-10 lg:px-8'>
      <div className='relative max-w-7xl mx-auto pt-0 lg:pt-10'>
        <div className='text-left lg:-mt-96'>
          <h2 className='text-3xl tracking-tight font-extrabold text-platinum sm:text-4xl font-poppins bg-spiritualRed bg-opacity-50 max-w-max px-4 py-2 text-left rounded-md'>
            Assassins Crew
          </h2>
        </div>
      </div>

      {/* first three images */}
      <div className='hidden -mt-72 max-w-lg mx-auto lg:grid gap-5 lg:grid-cols-3 lg:max-w-none'>
        <div className='flex-shrink-0'>
          <img className='h-full w-full object-cover rounded-lg shadow-lg' src={juniousCrew} alt='Crew Vsan' />
        </div>
        <div className='flex-shrink-0'>
          <img className='h-full w-full object-cover object-right rounded-lg shadow-lg' src={assassinsDC2013} alt='Crew Vsan' />
        </div>
        <div className='flex-shrink-0'>
          <img className='h-full w-full object-cover rounded-lg shadow-lg' src={crewLil} alt='Crew Vsan' />
        </div>
      </div>

      <div className='relative max-w-7xl mx-auto pt-14 border-t-2 border-platinum lg:border-none mt-3'>
        <div className='text-center'>
          <p className='mt-0 max-w-6xl mx-auto text-xl text-platinum sm:mt-4 text-left'>
            {CONTENT.assassins}
          </p>
        </div>

        {/* second set of images for >= lg screen sizes */}
        {/* <div className='hidden -mt-14 max-w-lg mx-auto lg:grid gap-10 lg:grid-cols-2 lg:max-w-none'>
          <div className='flex-shrink-0 transform scale-70'>
            <img className='h-full w-full object-cover object-right rounded-lg shadow-lg' src={assassinsDC2013} alt='Crew Vsan' />
          </div>
          <div className='flex-shrink-0 transform scale-70'>
            <img className='h-full w-full object-cover rounded-lg shadow-lg' src={assassinsJuniousPose} alt='Junious performing a dance move' />
          </div>
        </div> */}

        {/* pics for screen sizes <= md */}
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:hidden'>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img className='h-full w-full object-cover' src={crewVsan} alt='Crew Vsan' />
            </div>
          </div>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img className='h-full w-full object-cover' src={juniousCrew} alt='Crew Vsan' />
            </div>
          </div>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img className='h-full w-full object-cover' src={crewLil} alt='Crew Vsan' />
            </div>
          </div>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img className='h-full w-full object-cover' src={assassinsDC2013} alt='Crew Vsan' />
            </div>
          </div>
          <div className='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div className='flex-shrink-0'>
              <img className='h-full w-full object-cover' src={assassinsJuniousPose} alt='Crew Vsan' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
