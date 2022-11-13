import './App.css';
import React from 'react'
import ReceiveLink from './pages/ReceiveLink'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import {
  Routes,
  Route,
} from 'react-router-dom'



function App() {

  return (
    <div className="">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='ReceiveLink' element={<ReceiveLink />} />
      </Routes>
      <div className="App">

      </div>
    </div>
  );
}

export default App;
