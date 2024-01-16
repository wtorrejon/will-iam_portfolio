import banner from '../../assets/william.webp'

const Banner = () => {
  return (
    <section className="Saction-hero w-full">
        <div className="banner-container">
            <div className="img-wrapper flex items-center justify-center">
                <img src={banner} width='500px' alt="william" />
            </div>
            <div className="flex justify-center items-center">
                <div>
                    <div>
                        <p>Web Designer</p>
                        <p>& FrontEnd Developer</p>
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