/* import React from 'react'
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboustUs from "./components/AboustUs/AboustUs";
import Products from "./components/Products/Products";
import Footer from "./components/Footer/Footer";
import Navbar from './components/Navbar/Navbar';



function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <AboustUs />
      <Products />
      <Footer/>
    </>
  );
}

export default App;
 */


import React from 'react'
/* import Header from "./components/Header/Header"; */
import Navbar from './components/Navbar/Navbar';
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import {Routes,Route} from "react-router-dom"; 
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import ContactPage from './components/pages/ContactFormPage/ContactPage';
import NoPage from './components/pages/NoPage';


function App() {

  return (
    <>
      <Navbar/>
          <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='AboutUsPage' element={<AboutUsPage/>}/>
            <Route path='ProductsPage' element={<ProductsPage/>}/>
            <Route path='ContactPage' element={<ContactPage/>}/>
            <Route path='*' element= {<NoPage/>}/>
          </Routes>
      <Footer/>
    </>
  );
}

export default App;
