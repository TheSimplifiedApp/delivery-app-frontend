const Footer = () => {
  return (
    <div className="container mx-auto px-4 bg-orange-500 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tighter">
          DeliveryApp
        </span>
        <span className="text-white font-bold tracking-tighter flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  )
}
export default Footer