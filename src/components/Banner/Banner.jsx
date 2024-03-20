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
                            <p className=' principalText text-[#DAC5A7] text-8xl'>Web Designer</p>
                            <p className=' secondaryText text-[#DAC5A7] text-8xl' >& Developer</p>
                        </div>
                        <div className='wrapperSkills flex justify-center items-center mt-2 mb-2'>
                            <div className=' pr-2 '>
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_118_34)">
                                        <rect x="0.529297" y="0.157959" width="40" height="40" rx="20" fill="#FFE70B" fillOpacity="0.23" />
                                        <path d="M25.8899 21.5811L20.8274 26.6436C20.7483 26.7226 20.6411 26.767 20.5293 26.767C20.4175 26.767 20.3102 26.7226 20.2311 26.6436L15.1686 21.5811C15.0941 21.5011 15.0536 21.3953 15.0555 21.286C15.0574 21.1767 15.1017 21.0725 15.179 20.9952C15.2563 20.9179 15.3606 20.8736 15.4699 20.8717C15.5791 20.8697 15.6849 20.9103 15.7649 20.9848L20.1074 25.3266V13.9705C20.1074 13.8586 20.1518 13.7513 20.231 13.6721C20.3101 13.593 20.4174 13.5486 20.5293 13.5486C20.6412 13.5486 20.7485 13.593 20.8276 13.6721C20.9067 13.7513 20.9511 13.8586 20.9511 13.9705V25.3266L25.2936 20.9848C25.3736 20.9103 25.4794 20.8697 25.5887 20.8717C25.698 20.8736 25.8023 20.9179 25.8796 20.9952C25.9569 21.0725 26.0011 21.1767 26.0031 21.286C26.005 21.3953 25.9644 21.5011 25.8899 21.5811Z" fill="#DAC5A7" />
                                        <rect x="1.0293" y="0.657959" width="39" height="39" rx="19.5" stroke="#FFE70B" strokeOpacity="0.9" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_118_34" x="-14.4707" y="-14.842" width="70" height="70" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.5" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_118_34" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_118_34" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <p className='parrafo1 flex justify-center text-[#0E0E0E]'>
                                My Skills
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner