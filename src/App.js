import logo from './logo.svg';
import './App.css';
import React from "react";
// //import { BrowserRouter } from 'react-router-dom';
 import Home from "./components/home";
 import Career from "./components/career";
 import Contact from "./components/contact";
import Talent from "./components/talent";
import Blog from "./components/blog";
// import reactDom from 'react-dom';


function App() {
  return (
    <div className="App">

      <Home/>
      <Career/>
      <Contact/>
      <Talent/>
      <Blog/>
      <div className="credits">
      <marquee>website by dev peris muthoni</marquee>
        </div>
  
    </div>
  );
}

export default App;
