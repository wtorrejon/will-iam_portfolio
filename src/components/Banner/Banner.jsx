import banner from '../../assets/william.webp'
import './Banner.css'

const Banner = () => {
  return (
    <section className="Saction-hero w-full">
        <div className="banner-container ">
            <div className="img-wrapper flex items-center justify-center">
                <img src={banner} width='500px' alt="william" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <div className='flex flex-col items-center justify-center'>
                        <p className=' principalText text-[#DAC5A7] text-9xl'>Web Designer</p>
                        <p className=' secondaryText text-[#DAC5A7] text-9xl' >& Developer</p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <div className=''>
                    my services
                </div>
            </div>

        </div>
    </section>
  )
}                                                                                                       

export default Banner