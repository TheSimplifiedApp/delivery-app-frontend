import landingImage from '../assets/landing.png'
import appDownloadImage from '../assets/appDownload.png'

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md w-[90%] mx-auto py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing image" />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span>
            Download the App
          </span>
          <span className='font-bold text-3xl tracking-tighter'>
            Order food even faster
          </span>
          <img src={appDownloadImage} alt="App download image" />
        </div>
      </div>
    </div>
  )
}
export default HomePage