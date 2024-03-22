import { BurguerBotton } from "../BurguerButton/BurguerBotton.jsx"
import william from "../../assets/william.svg"

import "./Navbar.css"

const Navbar = () => {

  return (

    <div className='fixed inset-x-0 top-0 flex justify-center items-center z-40'>
      <div className='navbar-hero justify-between items-center border-[#DAC5A7]/15 bg-[#DAC5A7]/5 '>
        <div className=" flex justify-center items-center p-4">
          <div className="navbar-logo flex">
            <img src={william} alt="logo" />
          </div>
          <div className="navbar-links pl-6 pr-6">
            <ul className="navbar-links-links flex justify-between items-center gap-4" >
              <li>
                <a href="">SERVICES</a>
              </li>
              <li>
                <a href="">WORK</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
            </ul>
          </div>
          <div className="navbar-redes  bg-[#FFE70B] pr-3 pl-3 pt-2 pb-2 rounded-sm">
            <ul className="navbar-redes-links flex justify-center items-center">
              <li>
                <a className=" text-[#272624]" href="letsTalk">
                  LET`S TALK
                </a>
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