import IconLets from '../../assets/icon-lets.svg';
import PropTypes from 'prop-types';
import "./Card.css"

const Card = ({id,title, order, description, link}) => {

  Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }
  
  return (
    <div className="wrapper-card flex items-center justify-center p-10 bg-[#DAC5A7]/5 border-[#343230] ">
        <div className=" grid grid-cols-1 gap-10 ">
          <div className="data-text ">
            <div className='grid grid-cols-1 gap-1 '>
              <div className=" flex justify-start items-center">
                <p className=" orderCard text-sm text-[#DAC5A799]">{order}</p>
              </div>
              <div>  
                <p className="tittleCard font-light text-2xl text-[#DAC5A7]">{title}</p>
              </div>
            </div>
            <div>
              <p className="descriptionCard pt-4 font-light leading-loose text-[#DAC5A7]">{description}</p>
            </div>
          </div>
          <div>
            <a className='w-70 flex justify-start items-center gap-4 cursor-pointer' href="">
              <img src={IconLets} alt={id} />
              <p className=" text-[#DAC5A7]">{link}</p>
            </a>
          </div>
        </div>
      </div>
  )
}

export default Card