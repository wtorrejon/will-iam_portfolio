import Banner from '../../components/Banner/Banner.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Cards from '../../components/cards/Cards.jsx'
import Skills from '../../components/skills/Skills.jsx'

import './App.css'




function App() {
  return (
    <>
      <div className='App flex-col justify-center items-center '>
        <Navbar />
        <Banner />
        <Skills />
        <Cards />
      </div>
    </>
  )
}

export default App
