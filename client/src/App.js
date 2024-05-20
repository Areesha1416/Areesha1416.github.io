import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import ScrollTop from './components/ScrollTop';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import HomeTwo from './pages/HomeTwo/HomeTwo';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';
import Services from './pages/Services/Services';
import Price from './pages/Pricing/Price';
import Develop from './pages/Develop/Develop';
import Login from './pages/AI Shoe Analyzer/Login';
import SignUp from './pages/AI Shoe Analyzer/Signup';
import UploadScreen from './pages/AI Shoe Analyzer/UploaderScreen';
import Dashboard from './pages/AI Shoe Analyzer/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import LoginDesign from './pages/AI Shoe Analyzer/Design';
import SignUpDesign from './pages/AI Shoe Analyzer/Signup';
import EmployeeRecords from './pages/AI Shoe Analyzer/ViewEmployee';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:5000/auth/verify', {
          method: 'GET',
          headers: { token: localStorage.token },
        });
        const parseRes = await response.json();
        setIsAuthenticated(parseRes === true);
      } catch (error) {
        console.error(error.message);
        toast.error('Authentication verification failed.');
      }
    };

    checkAuth();
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <ScrollTop />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeTwo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeTwo" element={<HomeTwo />} />
            <Route 
              path="/login" 
              element={!isAuthenticated ? 
                <LoginDesign setAuth={setIsAuthenticated} /> : 
                <Navigate to="/dashboard" replace />} 
            />
            <Route 
              path="/register" 
              element={!isAuthenticated ? 
                <SignUpDesign setAuth={setIsAuthenticated} /> : 
                <Navigate to="/dashboard" replace />} 
            />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? 
                <Dashboard setAuth={setIsAuthenticated} /> : 
                <Navigate to="/login" replace />} 
            />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/upload" element={<UploadScreen />} />
            <Route path='/view-employee' element={<EmployeeRecords/>}></Route>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolioDetails" element={<PortfolioDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/price" element={<Price />} />
            <Route path="/develop" element={<Develop />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </Fragment>
  );
}

export default App;