import Card from '../Card/Card'
import './Cards.css'

//array de objetos para renderizar dentro de las cards
const dataCards = [
  {
    id: 1,
    order: "01",
    title: 'MANTENIMIENTO INDUSTRIAL',
    description: 'Soluciones integrales para la industria, en el campo del mantenimiento industrial y desarrollo de proyectos, con una visión amplia para optimizar todo proceso ',
    link: 'VER MAS'
  },
  {
    id: 2,
    order: "01",
    title: 'PROYECTOS INDUSTRIALES',
    description: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
    link: 'VER MAS'
  },
  {
    id: 3,
    order: "02",
    title: 'DESARROLLO DE SOFTWARE',
    description: 'Obtenga soluciones de desarrollo web personalizadas que se adapten a sus especificaciones y estén diseñadas para ofrecer una experiencia de usuario impecable.',
    link: 'ABOUT DEVELOPMENT'
  },
  // {
  //   id: 4,
  //   order: "03",
  //   title: 'CONTENT & SEO',
  //   description: 'Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.',
  //   link: 'ABOUT SEO'
  // }
]


const Cards = () => {
  return (

    <section className="sectionServices" id="sectionServices" >
      <div className='frameH'>
        <div className='containerCards'>
          <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
            {
              dataCards.map((card) => (
                <Card 
                key={card.id} order={card.order} title={card.title} description={card.description} link={card.link} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards