import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Error from "./pages/Error/Error";
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
        <Routes>
          <Route path="/" element={<Navigate to="kasa"/>}/>
          <Route path="/kasa" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/logement" element={<Logement/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;