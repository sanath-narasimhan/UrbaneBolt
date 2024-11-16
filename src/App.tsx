import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;