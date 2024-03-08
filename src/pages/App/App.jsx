import Banner from '../../components/Banner/Banner.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Cards from '../../components/cards/Cards.jsx'
import Skills from '../../components/skills/Skills.jsx'
import Smoke from '../../components/smoke/Smoke.jsx'

import './App.css'




function App() {
  return (
    <>
      <div className='App flex-col justify-center items-center '>
        <Navbar />
        <Banner />
        <Smoke />
        <Skills />
        <Cards />
      </div>
    </>
  )
}

export default App
