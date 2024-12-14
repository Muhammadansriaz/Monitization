import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Pages/Home/Home';
import Features from './Pages/Features';
import AboutUs from './Pages/AboutUs';
import Hiring from './Pages/Hiring';
import Menu from './Components/Menu';
import { useState } from 'react';
import SignIn from './Pages/SignIn';
function App() {

  const[clicked,isClicked] = useState(false)
  return (

    <Router>
  <Navbar clicked={clicked} isClicked={isClicked}/>
  {clicked?<Menu/>:null}
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="Features" element={<Features />} />
      <Route exact path="about-us" element={<AboutUs />}/>
      <Route exact path="Hiring" element={<Hiring />}/>
    
      <Route exact path="sign-in" element={<SignIn />}/>

    </Routes>
    </Router>

  );
}

export default App;
