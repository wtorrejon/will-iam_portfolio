import { NavLink } from "react-router-dom"
import { BurguerBotton } from "../BurguerButton/BurguerBotton.jsx"
import william from "../../assets/william.svg"

import "./Navbar.css"

const Navbar = () => {

  return (

    <div className='fixed inset-x-0 top-0 flex justify-center items-center z-40'>
      <div className='navbar-hero justify-between items-center border-[#DAC5A7]/15 bg-[#DAC5A7]/5 '>
        <div className=" flex justify-center items-center p-4">
          <NavLink to='/' className="navbar-logo flex">
            <img src={william} alt="logo" />
          </NavLink>
          <div className="navbar-links pl-6 pr-6">
            <ul className="navbar-links-links flex justify-between items-center gap-4" >
              <li>
                <NavLink to='/servicios'>
                  SERVICIOS
                </NavLink>
              </li>
              <li>
                <NavLink to='/proyectos'>PROYECTOS</NavLink>
              </li>
              <li>
                <NavLink to='/about'>ACERCA DE MI</NavLink>
              </li>
              <li>
                <NavLink to='/blog'>BLOG</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-redes  bg-[#FFE70B] pr-3 pl-3 pt-2 pb-2 rounded-sm">
            <ul className="navbar-redes-links flex justify-center items-center">
              <li>
                <NavLink to='/contacto'  className="text-[#272624]" href="CONTACTO">
                CONTACTO
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
        <div className="burguer-icon">
          <BurguerBotton />
        </div>
      </div>
    </div>
  )
}

export default Navbar