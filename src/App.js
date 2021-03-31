import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
 import Home from "./components/home";
 import Resume from "./components/resume";
 import Career from "./components/career";
 import Message from "./components/message";
 import Contact from "./components/contact";
import Talent from "./components/talent";


function App() {
  return (
    <div className="App">
      <Router >  
          <Route path={"/resume"} component={Resume}/>   
          <Route path={"/talent"} component={Talent} />          
          </Router>
      <Home/>
      <Career/>
      <Message/>
      <Contact/>
      <div className="credits">
      <marquee><b>WEBSITE BY DEV PERIS MUTHONI</b></marquee>
        </div>
  
    </div>
  );
}

export default App;
