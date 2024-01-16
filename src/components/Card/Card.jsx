import IconLets from '../../assets/icon-lets.svg';
import PropTypes from 'prop-types';

const Card = ({id,title, order, description, link}) => {

  Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    order: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }
  
  return (
    <div className="wrapper-card flex items-center justify-center mt-4 p-10 bg-[#DAC5A7]/15 border-[#343230] ">
        <div className=" grid grid-cols-1 gap-10 ">
          <div className="data-text ">
            <div className='grid grid-cols-1 gap-1 '>
              <div className=" flex justify-start items-center">
                <p className=" text-sm font-medium text-[#DAC5A799]">{order}</p>
              </div>
              <div>  
                <p className=" font-light text-2xl text-[#DAC5A7]">{title}</p>
              </div>
            </div>
            <div>
              <p className=" font-light leading-loose text-[#DAC5A7]">{description}</p>
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