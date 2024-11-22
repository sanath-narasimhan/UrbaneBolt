import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import TrackingPage from './pages/TrackingPage';
import AboutUsPage from './pages/AboutUsPage';
import TrackingPageWithData from './pages/TrackingPageData';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/trackShip" element={<TrackingPageWithData />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </BrowserRouter>
  );
}

export default App;