import crewVsan from '../photos/CrewVsan.jpeg'
import crewLil from '../photos/CrewLil.jpeg'
import juniousCrew from '../photos/JuniousCrew.jpeg'
import { CONTENT } from './journeyContent'

export default function Assassins () {
  return (
    <div className='relative bg-daviesGrey pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      {/* first three images */}
      <span className='hidden mx-auto lg:grid gap-1 lg:grid-cols-3'>

        <section className='relative h-screen preserve3d-no-z z-20 lg:mt-14 lg:ml-20 lg:-mr-20'>
          <div
            className='bg-crewVsan bg-contain xl:bg-70% bg-center bg-no-repeat vsan-parallax rounded-md'
            aria-hidden='true'
          />
        </section>

        <section className='relative h-screen preserve3d-no-z z-40 lg:-mt-52 lg:ml-16 lg:-mr-16 border-2 border-white rounded-md'>
          <div
            className='bg-junious-crew bg-cover bg-no-repeat junious-crew-parallax absolute top-0 right-0 bottom-0 left-0 z-30 rounded-md border-2 border-red-500 h-3/4 w-full'
            aria-hidden='true'
          />
        </section>

        <section className='relative h-screen preserve3d-no-z z-20 lg:mt-56 lg:-ml-20 lg:mr-20'>
          <div
            className='bg-crewLil bg-contain xl:bg-70% bg-no-repeat crew-lil-parallax rounded-md'
            aria-hidden='true'
          />
        </section>

      </span>
      <div className='absolute inset-0'>
        <div className='bg-richBlack h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-platinum sm:text-4xl font-poppins'>Assassins Crew</h2>
          <p className='mt-3 max-w-6xl mx-auto text-xl text-platinum sm:mt-4'>
            {CONTENT.assassins}
          </p>
        </div>
        {/* Screen sizes >= lg */}
        {/* first three images
        <section className='hidden mt-12 max-w-lg mx-auto lg:grid gap-1 lg:grid-cols-3 lg:max-w-none '>
          <div className='relative h-screen army-preserve3d'>
            <div className='bg-crewVsan bg-cover vsan-parallax -ml-10 -mr-16 rounded-md' />
          </div>
          <div className='relative'>
            <div
              className='bg-junious-crew bg-cover junious-crew-parallax -ml-16 -mr-16 rounded-md'
              aria-hidden='true'
            />
          </div>
          <div className='relative'>
            <div
              className='bg-crewLil bg-cover crew-lil-parallax -ml-24 -mr-2 rounded-md'
              aria-hidden='true'
            />
          </div>
        </section> */}
        {/* second three images */}
        <div className='hidden -mt-32 max-w-lg mx-auto lg:grid gap-1 lg:grid-cols-3 lg:max-w-none preserve3d h-screen'>
          <div className='relative'>
            <div className='bg-assassinsDC2013 bg-cover assassins-dc-parallax ml-10 -mr-44 rounded-md' />
          </div>
          <div className='relative'>
            <div className='bg-assassinsJuniousPose bg-cover assassins-junious-pose-parallax -mt-20 -ml-14 -mr-14 rounded-md' />
          </div>
          <div className='relative'>
            <div className='bg-assassinsLowView bg-cover assassins-low-view-parallax mt-20 -ml-52 mr-12 rounded-md' />
          </div>
        </div>
        {/* Screen sizes <= md */}
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
        </div>
      </div>
    </div>
  )
}
