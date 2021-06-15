import { CONTENT } from './journeyContent'

/* This example requires Tailwind CSS v2.0+ */
export default function JourneyNextLevel () {
  return (
    <div className='bg-woodGray py-16 lg:py-24'>
      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='relative py-24 px-8 bg-burlyWood rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
          <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
            <img
              src='https://images.squarespace-cdn.com/content/v1/5b521e334cde7a741d47e768/1556040963000-MSMZER9EYAYVN5IENQ1Q/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Junious+introducing+NLprogram+to+participants++%281+of+1%29.jpg'
              alt='Junious sitting at table'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='relative lg:col-start-2 lg:col-span-1'>
            <p className='h-12 w-auto font-poppins font-extrabold text-3xl sm:text-4xl leading-8'>NEXT LEVEL</p>
            <blockquote className='mt-6 text-platinum'>
              <p className='text-xl font-medium sm:text-2xl'>
                {CONTENT.nextLevel}
              </p>
              <footer className='mt-6 w-max'>
                <p className='flex flex-col font-medium'>
                  <a
                    href='https://www.nextlevel-usa.org/junious-brickhouse'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-yNBlue hover:text-indigoDye'
                  >
                    Visit NEXT LEVEL
                  </a>
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}
