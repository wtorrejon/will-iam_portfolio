import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Servicios } from '../Servicios/Servicios';
import Navbar from '../../components/Navbar/Navbar.jsx'
import { Home } from '../Home/Home.jsx';
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/servicios', element: <Servicios /> }
   
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
