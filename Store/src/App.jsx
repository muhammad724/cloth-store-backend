import { Route, Routes } from 'react-router'
import './App.css'
import LandingPage from './pages/LandingPage'
import Product from './pages/Product'
import Cart from './pages/CartPage.jsx'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>} />
    </Routes>
  
    </>
  )
}

export default App
