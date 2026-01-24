import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Booking from './pages/Booking'
import Tiket from './pages/Tiket'



function App () {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/booking' element={<Booking />}/>
          <Route path='/tiket' element={<Tiket />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
