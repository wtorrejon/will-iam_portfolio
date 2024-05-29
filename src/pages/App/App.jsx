import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Servicios } from '../Servicios/Servicios';
import  { Proyectos } from '../Proyectos/Proyectos.jsx';
import { About }  from '../About/About.jsx';
import { Blog } from '../Blog/Blog.jsx';
import { Contact } from '../Contact/Contact.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import { Home } from '../Home/Home.jsx';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/servicios', element: <Servicios /> },
    { path: '/proyectos', element: <Proyectos /> },
    { path: '/about', element: <About /> },
    { path: '/blog', element: <Blog /> },
    { path: '/contacto', element: <Contact /> }
   
  ])
  return routes;
}


function App() {
  return (
    <>
      <div className='App flex-col justify-center items-center '>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
