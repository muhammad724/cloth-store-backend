import { Route, Routes } from 'react-router'
import './index.css'
import LandingPage from './pages/LandingPage'
import Product from './pages/Product'
import Cart from './pages/CartPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='*' element={<h1 className='text-center text-3xl mt-20'>404 - Page Not Found</h1>} />
      <Route path='/AboutUs' element={<AboutUs/>} />
      <Route path='/ContactUs' element={<ContactUs/>} />
    </Routes>
  
    </>
  )
}

export default App
