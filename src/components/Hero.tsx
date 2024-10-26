import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <img src={hero} alt='hero image' className='w-full max-h-[600px] object-cover' />
    </div>
  )
}
export default Hero