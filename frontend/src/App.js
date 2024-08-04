import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import IkoyiCentralMosque from './pages/IkoyiCentralMosque/IkoyiCentralMosque';
import NurilIslamSchool from './pages/NurilIslamSchool/NurilIslamSchool';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ikoyi-central-mosque" element={<IkoyiCentralMosque />} />
          <Route path="/nuril-islam-school" element={<NurilIslamSchool />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
