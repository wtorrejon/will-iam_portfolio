import PropTypes from 'prop-types';
import './CardWorks.css'

const CardWorks = ({ id, tittle, skills, link, image }) => {

    CardWorks.propTypes = {
        id: PropTypes.number.isRequired,
        tittle: PropTypes.string.isRequired,
        skills: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }

    return (
        <div className='wrapper-works flex items-center justify-center '>
            <a href={link} className='hrefImage' >
                <figure className='workImage'>
                    <img className='workImage' src={image} alt={id} />
                </figure>
                <div className='workTittleWrapper flex items-center'>
                    <div className='workTittle flex items-center justify-between border-[#DAC5A7]/15 bg-[#181715]/60'>
                        <h2 className=' text-[#DAC5A799] '>{tittle}</h2>
                        <p className=' text-[#DAC5A799]'>{skills}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CardWorks