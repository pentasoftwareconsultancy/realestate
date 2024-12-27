import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/Navbar';
// import Hero from './component/hero/Hero';
import Hero from './component/heroHome/Hero';
import About from './page/about/About';
import Service from './page/service/Service';
import Property from './page/property/Property';
import Contact from './component/contact/Contact';
import Newsletter from './page/newsletter/Newsletter';
import Footer from './page/footer/Footer';
import PropertyDetail from './page/property/PropertyDetail';
import AboutUs from './page/aboutus/AboutUs'
import AboutDetails from './page/aboutus/AboutDetails';
import HeroForm from './component/heroHome/form/HeroForm';
import ContactPage from './page/ContactPage/ContactPage';
import Error from './page/ErrorPage/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/property" element={<Property/>} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactPage/>} />
        <Route path="/about-details" element={<AboutDetails />} />
        <Route path="/error" element={<Error/>} />
        <Route path="/" element={
          <>

            <Hero />
            <HeroForm/>
            <About />
            <Service />
            <Property />
            <Contact />
            <Newsletter />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
