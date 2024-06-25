import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Homepage from './components/pages/home/Homepage';

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/home" element={<Homepage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
