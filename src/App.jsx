import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Customer from './pages/Customer'



function App () {

  return (
    <>
    <Router>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/admin' element={<Admin />}/>
          <Route path='/customer' element={<Customer />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
