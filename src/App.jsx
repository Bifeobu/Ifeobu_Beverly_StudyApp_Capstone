import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/pages/home/Homepage';
import CheckUppage from './components/pages/checkup/CheckUppage';
import AboutUs from './components/pages/about/AboutUs';


function App() {
  //holds all the state, when forms are fetched they will go into this so they can be displayed
  const [checkForm, setCheckForm] = useState([]);

  //to send request
  const BASE_URL = "https://ifeobu-beverly-backend-studyapp-capstone.onrender.com"

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
          <Route path="/check-in" element={<CheckUppage 
          //to update form state with a new form
          checkForm={checkForm} setCheckForm={setCheckForm} BASE_URL={BASE_URL}/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
