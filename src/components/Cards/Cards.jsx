import Card from '../Card/Card'
import './Cards.css'

//array de objetos para renderizar dentro de las cards
const dataCards = [
 {
    id: 1,
    order: "01",
    title: 'WEB DESING',
    description: 'Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.',
    link: 'ABOUT WEB DESING'
  },
  {
    id: 2,
    order: "02",
    title: 'DEVELOPMENT',
    description: 'Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.',
    link: 'ABOUT DEVELOPMENT'
 },
 {
  id: 3,
  order: "03",
  title: 'CONTENT & SEO',
  description: 'Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.',
  link: 'ABOUT SEO'
}
]


const Cards = () => {
  return (
    
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 px-12'>
       
      {
        dataCards.map((card) => (
          <Card key={card.id} order={card.order} title={card.title} description={card.description} link={card.link} />
        ))
      }
      
    </div>
  )
}

export default Cards