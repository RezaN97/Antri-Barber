import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Booking from './pages/Booking'
import Tiket from './pages/Tiket'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'



function App () {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/booking' element={<Booking />}/>
          <Route path='/tiket' element={<Tiket />}/>
          <Route path='/contact' element={<Contact />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
