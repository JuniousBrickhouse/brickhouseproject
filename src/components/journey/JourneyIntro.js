import juniousGray from '.././photos/JuniousGrey.jpeg'
import { CONTENT } from './journeyContent'

export default function JourneyIntro () {
  return (
    <div className='relative py-16 bg-richBlack overflow-hidden'>
      <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
        <div className='relative h-full text-lg max-w-prose mx-auto' aria-hidden='true'>
          <svg
            className='absolute top-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-earthYellow' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
          </svg>
          <svg
            className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-earthYellow' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
          </svg>
          <svg
            className='absolute bottom-12 left-full transform translate-x-32'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
          >
            <defs>
              <pattern
                id='d3eb07ae-5182-43e6-857d-35c643af9034'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect x={0} y={0} width={4} height={4} className='text-earthYellow' fill='currentColor' />
              </pattern>
            </defs>
            <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
          </svg>
        </div>
      </div>
      <div className='relative px-4 sm:px-6 lg:px-8'>
        <div className='text-lg max-w-prose mx-auto'>
          <h1>
            {/* <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
              Introducing
            </span> */}
            <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-earthYellow sm:text-4xl'>
              Junious Brickhouse
            </span>
          </h1>
          {/* <p className='mt-8 text-xl text-gray-500 leading-8'>
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
            aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
            egestas fringilla sapien.
          </p> */}
        </div>
        <div className='mt-6 prose prose-indigo prose-lg text-platinum mx-auto'>
          <p>
            {CONTENT.intro}
          </p>
          {/* <h2>From beginner to expert in 30 days</h2>
          <p>
            Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
            Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
            mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
            ipsum eu a sed convallis diam.
          </p>
          <blockquote>
            <p>
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
              pellentesque. Blandit amet, sed aenean erat arcu morbi.
            </p>
          </blockquote>
          <p>
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
          </p> */}
          <figure>
            <img
              className='w-full rounded-lg'
              src={juniousGray}
              alt='Junious wearing a gray hat'
              width={1310}
              height={873}
            />
          </figure>
          {/* <h2>Everything you need to get up and running</h2> */}
          <p>
            {CONTENT.childhood}
          </p>
        </div>
      </div>
    </div>
  )
}
