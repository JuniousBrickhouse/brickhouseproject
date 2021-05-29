export default function DividerOne ({ dividerAnimationShift }) {
  return (
    <div className={`${dividerAnimationShift.dividerOne ? 'animate-none' : 'animate-none'} mx-auto px-4 sm:px-6 lg:px-8 h-screen w-screen bg-dancer-test bg-center bg-cover bg-fixed bg-no-repeat`} />

  )
}
