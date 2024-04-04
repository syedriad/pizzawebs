
// import './App.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'



function App() {
  

  return (
    <div>

      <Router>

         <Navbar/>
        <Routes>

          {/* <Route path='/' element={<Home/>}  ></Route> */}
          <Route path='/' element={<Home/>}  ></Route>
          <Route path='/menu' element={<Menu/>}  ></Route>
          <Route path='/about' element={<About/>}  ></Route>
          <Route path='/contact' element={<Contact/>}  ></Route>

        
        </Routes>
          <Footer/>
      </Router>
      

    </div>
  )
}

export default App
