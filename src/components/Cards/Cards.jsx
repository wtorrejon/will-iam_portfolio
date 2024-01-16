import IconLets from '../../assets/icon-lets.svg'
import './Cards.css'
const Cards = () => {
  return (
    <div className="wrapper-card flex items-center justify-center mt-4 p-10 bg-[#DAC5A7]/15 border-[#343230] ">
      <div className=" flex-col gap-4 ">
        <div className="data-text ">
          <div className=" flex justify-start items-center">
            <p className=" font-medium text-[#DAC5A7]">01</p>
          </div>
          <div>
            <p className=" font-thin text-2xl text-[#DAC5A7]">WEB DESING</p>
          </div>
          <div>
            <p className=" font-light text-[#DAC5A7]">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
          </div>
        </div>
        <div>
          <a className='w-70 flex justify-start items-center gap-4 cursor-pointer' href="">
            <img src={IconLets} alt="" />
            <p className=" text-[#DAC5A7]">ABOUT WEB DESING</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Cards