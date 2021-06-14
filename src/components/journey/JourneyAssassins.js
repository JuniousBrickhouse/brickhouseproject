import crewVsan from '../photos/CrewVsan.jpeg'
import crewLil from '../photos/CrewLil.jpeg'
import juniousCrew from '../photos/JuniousCrew.jpeg'

export default function Assassins () {
  return (
    <div className='relative bg-daviesGrey pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div className='absolute inset-0'>
        <div className='bg-richBlack h-1/3 sm:h-2/3' />
      </div>
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl tracking-tight font-extrabold text-platinum sm:text-4xl font-poppins'>Assassins Crew</h2>
          <p className='mt-3 max-w-2xl mx-auto text-xl text-mediumCarmine sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        {/* Screen sizes >= lg */}
        <div className='hidden mt-12 max-w-lg mx-auto lg:grid gap-1 lg:grid-cols-3 lg:max-w-none preserve3d h-screen'>
          <div className='relative'>
            <div className='bg-crewVsan bg-cover vsan-parallax -ml-10 -mr-16 rounded-md' />
          </div>
          <div className='relative'>
            <div className='bg-junious-crew bg-cover junious-crew-parallax -ml-16 -mr-16 rounded-md' />
          </div>
          <div className='relative'>
            <div className='bg-crewLil bg-cover crew-lil-parallax -ml-24 -mr-2 rounded-md' />
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
